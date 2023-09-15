'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import AlertModal from "@/components/ui/modals/alert-modal";
import ImageUpload from "@/components/ui/image-upload";

const formScheme = z.object({
    label: z.string().trim().min(1),
    imageUrl: z.string().min(1)
});

const BillboardForm = ({ initialData }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const params = useParams();

    const title = initialData ? 'Edit billboard' : 'Create billboard';
    const description = initialData ? 'Edit a billboard' : 'Create a billboard';
    const toastMessage = initialData ? 'Billboars updated.' : 'Billboard created.';
    const action = initialData ? 'Save changes' : 'Create';

    const form = useForm({
        resolver: zodResolver(formScheme),
        defaultValues: initialData
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            if (initialData) {
                await axios.patch(`/api/${params.storeId}/billboards/${params.billboardId}`, data);
            } else {
                await axios.post(`/api/${params.storeId}/billboards`, data);
            }
            router.refresh();
            router.push(`/${params.storeId}/billboards`);
            toast.success(toastMessage);
        } catch (e) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/${params.storeId}/billboards/${params.billboardId}`);
            router.refresh();
            router.push('/');
            toast.success('billboard deleted.');
        } catch (e) {
            toast.error('Make sure your removed all categories using this billboard first.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <>
            <AlertModal isOpen={open} onClose={() => setOpen(false)} loading={loading} onConfirm={onDelete} />
            <div className="flex items-center justify-between">
                <Heading title={title} description={description} />
                {initialData &&
                    (<Button
                        disabled={loading}
                        variant='destructive'
                        size='sm'
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                    )}
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <FormField control={form.control} name='imageUrl' render={({ field }) => (
                        <FormItem>
                            <FormLabel>Background Image</FormLabel>
                            <FormControl>
                                <ImageUpload
                                    value={field.value ? [field.value] : []}
                                    disabled={loading}
                                    onChange={(url) => field.onChange(url)}
                                    onRemove={() => field.onChange('')}
                                />
                            </FormControl>
                        </FormItem>
                    )} />
                    <div className="grid grid-col-3 gap-8">
                        <FormField control={form.control} name='label' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Label</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder='Billboard label' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>
                    <Button disabled={loading} className='ml-auto' type='submit'>
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    );
}

export default BillboardForm;