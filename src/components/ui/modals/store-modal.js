"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { useState } from "react";
import { Button } from "../button";
import axios from "axios";
import toast from "react-hot-toast";

import { useModal, userId } from "@/hooks/use-modal";
import Modal from "../modal";
import { Input } from "../input";

const formScheme = z.object({
  name: z.string().trim().min(1),
});

export const StoreModal = ({ userId }) => {
  const storeModal = useModal();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formScheme),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      values.userId = userId;
      const { data } = await axios.post(
        `${process.env.API_URL}api/v1/stores`,
        values
      );
      window.location.assign(`/${data?.data?.data?._id}`);
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage your products."
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Store Name"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex justify-end items-center w-full">
                <Button
                  variant="outline"
                  onClick={storeModal.onClose}
                  disabled={loading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  Add
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
