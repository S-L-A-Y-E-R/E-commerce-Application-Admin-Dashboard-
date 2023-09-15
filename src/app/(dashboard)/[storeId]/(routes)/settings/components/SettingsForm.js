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
import ApiAlert from "@/components/ui/api-alert";
import useOrigin from "@/hooks/use-origin";

const formScheme = z.object({
    name: z.string().trim().min(1)
});

const SettingsForm = ({ initialData }) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const params = useParams();
    const origin = useOrigin()

    const form = useForm({
        resolver: zodResolver(formScheme),
        defaultValues: initialData
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await axios.patch(`/api/stores/${params.storeId}`, data);
            router.refresh();
            toast.success('Store Updated');
        } catch (e) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/stores/${params.storeId}`);
            router.refresh();
            router.push('/');
            toast.success('Store deleted.');
        } catch (e) {
            toast.error('Make sure your removed all products first.');
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <>
            <AlertModal isOpen={open} onClose={() => setOpen(false)} loading={loading} onConfirm={onDelete} />
            <div className="flex items-center justify-between">
                <Heading title='Settings' description='Manage Store Preferences' />
                <Button
                    disabled={loading}
                    variant='destructive'
                    size='sm'
                    onClick={() => setOpen(true)}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <FormField control={form.control} name='name' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input disabled={loading} placeholder='Store Name' {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    </div>
                    <Button disabled={loading} className='ml-auto' type='submit'>
                        Save Changes
                    </Button>
                </form>
            </Form>
            <Separator />
            <ApiAlert title='NEXT_PUBLIC_API_URL' description={`${origin}/api/${params.storeId}`} variant="public" />
        </>
    );
}

export default SettingsForm;