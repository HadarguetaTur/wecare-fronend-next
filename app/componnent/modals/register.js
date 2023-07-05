'use client'
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./modal";
import Heading from "./heading";
import Input from "../input/input";
import axios from "axios";
import { toast } from "react-hot-toast";
import Button from "../button/button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

const Register = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',

        }
    });

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal])

    const onSubmit = (data) => {
        console.log(data);
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error('Somting Went Worng')
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to Wecare!"
                subtitle="Create an account"
                center
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                required

            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                required
            />
            <Input
                id="password"
                label="password"
                type="password"
                disabled={isLoading}
                register={register}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => { signIn('github') }}
            />
            <div className="text-neatural-500 text-center mt-4 font-light">
                <div className="flex justify-center flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={onToggle} className="text-neutral-800 curser-pointer hover:underline">
                        Log in
                    </div>
                </div>
            </div>
        </div>

    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default Register;