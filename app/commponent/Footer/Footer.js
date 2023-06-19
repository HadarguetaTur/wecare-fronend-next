import Link from "next/link";
import { Logo } from "../Logo";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full z-10 bg-white shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
               2023
                </div>
            </div>
        </div>
    </footer>
    );
};