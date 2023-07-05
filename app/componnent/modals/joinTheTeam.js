'use client'
import useJoinTheTeamModal from "@/app/hooks/useJoinTheTeamModal"
import Modal from "./modal";
import { useMemo, useState } from "react";
import { subjects } from "../utils/static.data";
import Heading from "./heading";
import CategoryInput from "../input/categoryInput";
import CountrySelect from "../input/CountrySelect.js";
import { useForm } from "react-hook-form";
import Input from "../input/input";
import { useRouter } from "next/navigation";
import BooleanInput from "../input/booleanInput";
import ImageUpload from "../input/ImageUpload";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-hot-toast";
import placeholder from '../../../public/hero.png'


const steps = {
    CATEGORY: 0,
    LOCATION: 1,
    DESCRIPTION: 2,
    IMAGE: 3,
    PRICE: 4,
    AUTHORITY: 5,
    AVAILABILITY: 6,
    INFO: 7,
};


const JoinTheTeam = () => {
    const joinModal = useJoinTheTeamModal();
    const [step, setStep] = useState(steps.CATEGORY)
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [availability, setAvailability] = useState({
        sunday: {
            available: false,
            startTime: "",
            endTime: "",
        },
        monday: {
            available: false,
            startTime: "",
            endTime: "",
        },
        tuesday: {
            available: false,
            startTime: "",
            endTime: "",
        },
        wednesday: {
            available: false,
            startTime: "",
            endTime: "",
        },
        thursday: {
            available: false,
            startTime: "",
            endTime: "",
        },
        friday: {
            available: false,
            startTime: "",
            endTime: "",
        },
        saturday: {
            available: false,
            startTime: "",
            endTime: "",
        },
    });


    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm({
        defaultValues: {
            defaultValues: {
                category: '',
                location: null,
                imageSrc: placeholder,
                meetingPrice:0,
                isReceiveHealthInsuranceFund: false,
                isReceiveHealthInsuranceCompanies: false,
                authority: [],
                instagramLink: "",
                facebookLink: "",
                contactEmail: "",
                phoneNumber: "",
                title:"",
                about:"",
                description:"",
                availability:availability,
        

            }
        },
    });
    const category = watch('category');
    const location = watch('location');
    const imageSrc = watch('imageSrc');
    const meetingPrice = watch('meetingPrice');
    
    const isReceiveHealthInsuranceFund = (watch('isReceiveHealthInsuranceFund'))
    const fileUrl = watch('fileUrl');
    const isReceiveHealthInsuranceCompanies = (watch('isReceiveHealthInsuranceCompanies'))

    const Map = useMemo(() => dynamic(() => import('../map/map'), {
        ssr: false
    }), [location]);

    const handleAvailabilityChange = (day, field, value) => {
        setAvailability((prevAvailability) => ({
            ...prevAvailability,
            [day]: {
                ...prevAvailability[day],
                [field]: value,
            },
        }));
    };

    const setCustomValue = (id, value) => {
        setValue(String(id), value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const onBack = () => {
        setStep((value) => value - 1);
    }

    const onNext = () => {
        setStep((value) => value + 1);
    }

    const onSubmit = (data) => {
        if (step !== steps.INFO) {
            return onNext();
        }
        setIsLoading(true);

        axios.post('/api/listings', data)
        .then(() => {
          toast.success('Listing created!');
          router.refresh();
          setStep(steps.CATEGORY)
          reset();
          joinModal.onClose();
        })
        .catch(() => {
          toast.error('Something went wrong');
        })
        .finally(() => {
          setIsLoading(false);
        })
    }


    const actionLabel = useMemo(() => {
        if (step === steps.INFO) {
            return 'Create'
        }
        return 'Next'
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === steps.CATEGORY) {
            return undefined
        }
        return 'Back'
    }, [step]);


    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describes your expertise?"
                subtitle="Pick a category"
            />
            <div
                className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
          scrollbar-hide
        "
            >
                {subjects.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            onClick={(category) => setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === steps.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Where is your place located?"
                    subtitle="Help guests find you!"
                />
                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map center={location?.latlng} />
                <Input
                    id="city"
                    label="City"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="street"
                    label="Street"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="houseNumber"
                    label="House Number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }

    if (step === steps.AVAILABILITY) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading title="Availability" subtitle="Set your availability for appointments" />
                {Object.entries(availability).map(([day, { available, startTime, endTime }]) => (
                    <div key={day} >
                        <BooleanInput
                            title={day}
                            subtitle={`Available on ${day}`}
                            value={available}
                            onChange={(value) => handleAvailabilityChange(day, "available", value)}
                        />
                        {available && (
                            <>
                                <Input
                                    id={`startTime-${day}`}
                                    label="Start Time"
                                    value={startTime}
                                    register={register}
                                    onChange={(e) => handleAvailabilityChange(day, "startTime", e.target.value)}
                                />
                                <Input
                                    id={`endTime-${day}`}
                                    label="End Time"
                                    value={endTime}
                                    register={register}
                                    onChange={(e) => handleAvailabilityChange(day, "endTime", e.target.value)}
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    if (step === steps.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="How would you describe your self?"
                    subtitle="Short and sweet works best!"
                />
                <Input
                    id="title"
                    label="Title"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Input
                    id="description"
                    label="Description"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id="about"
                    label="about"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="textarea"
                />
            </div>
        )
    }
    if (step === steps.AUTHORITY) {
        const authorityFields = watch("authority", []);

        const handleAddAuthority = () => {
            setCustomValue("authority", [...authorityFields, ""]);
        };

        const handleRemoveAuthority = (index) => {
            const updatedAuthorityFields = authorityFields.filter((_, idx) => idx !== index);
            setCustomValue("authority", updatedAuthorityFields);
        };

        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading title="Your authority" subtitle="the more the better.." />
                {authorityFields.map((authority, index) => (
                    <div key={index} className="flex gap-4 items-center">
                        <Input
                            id={`authority[${index}]`}
                            label={`Authority ${index + 1}`}
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => handleRemoveAuthority(index)}
                            className="text-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddAuthority}
                    className="text-blue-500"
                >
                    Add Authority
                </button>
                {authorityFields.length > 0 && (
                    <ul>
                        {authorityFields.map((authority, index) => (
                            <li key={index}>{authority}</li>
                        ))}
                    </ul>
                )}
                <hr />
                <Input
                    id="studiesDescription"
                    label="Tell us a few words about your studies"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="textarea"
                    required
                />
                <ImageUpload
                    onChange={(fileUrl) => setCustomValue("fileUrl", fileUrl)}
                    value={fileUrl}
                />
            </div>
        );
    }

    if (step === steps.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading title="Social Links " subtitle="Add your social media links" />
                <Input
                    id="instagramLink"
                    label="Instagram Link"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
                <Input
                    id="facebookLink"
                    label="Facebook Link"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
                <Input
                    id="contactEmail"
                    label="Contact Email"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
                <Input
                    id="phoneNumber"
                    label="Phone Number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
            </div>
        );
    }

    if (step === steps.IMAGE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Add a theme picture"
                    subtitle=""
                />
                <ImageUpload
                    onChange={(value) => setCustomValue('imageSrc', value)}
                    value={imageSrc}
                />
            </div>
        )
    }


    if (step === steps.PRICE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Now, set your price"
                    subtitle="How much do you charge per night?"
                />
                <Input
                    id="meetingPrice"
                    label="Price"
                    formatPrice
                    type="number"
                    value={meetingPrice}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <BooleanInput
                    value={isReceiveHealthInsuranceFund}
                    onChange={(value) => setCustomValue('isReceiveHealthInsuranceFund', value)}
                    title="Agreement with the health funds"
                    subtitle="Do you have an agreement with the health insurance funds?"


                />
                <BooleanInput
                    value={isReceiveHealthInsuranceCompanies}
                    onChange={(value) => setCustomValue('isReceiveHealthInsuranceCompanies', value)}
                    title="Agreement with the Insurance Companies"
                    subtitle="Do you have an agreement with the Insurance Companies?"
                />
            </div>
        )
    }



    return (
        <Modal
            isOpen={joinModal.isOpen}
            onClose={joinModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryLabel={secondaryActionLabel || (() => { })}
            secondaryAction={step === steps.CATEGORY ? undefined : onBack}
            title="Join Us!"
            body={bodyContent}
        />
    )
}

export default JoinTheTeam