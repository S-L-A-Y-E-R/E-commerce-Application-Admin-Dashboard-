"use client";

import { StoreModal } from "@/components/ui/modals/store-modal";

import { useState, useEffect } from "react";

export const ModalProvider = ({ userId }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <StoreModal userId={userId} />;
};
