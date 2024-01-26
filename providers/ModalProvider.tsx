"use client";

import Modal from "@/components/Model";

import {useEffect, useState } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
        <Modal
            title = "Test Modal"
            description="Test Description"
            isOpen
            onChange = {() => {}}
        >
            Test Chilren 
        </Modal>
        </>
    );
}

export default ModalProvider;