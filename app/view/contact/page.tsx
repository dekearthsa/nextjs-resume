"use client"

import ComponentHeader from "../../component/ComponentHeader";
import Script from "next/script";
import { useState } from "react";

interface OmiseCardType {
    configure: (config: {
        publicKey: string;
        currency: string;
        frameLabel: string;
        submitLabel: string;
        buttonLabel: string;
    }) => void;
    configureButton: (selector: string) => void;
    attach: () => void;
    open: (config: {
        amount: number;
        onCreateTokenSuccess: (token: string) => void;
        onFormClosed: () => void;
    }) => void;
}

let OmiseCard: OmiseCardType | undefined;

const ViewContact = () => {
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    const [isPackage, setPackage] = useState("");

    const handleLoadScript = () => {
        OmiseCard = (window as any).OmiseCard;
        OmiseCard.configure({
            publicKey: "",
            currency: "THB",
            frameLabel: "Demo-test-shop",
            submitLabel: "Pay NOW",
            buttonLabel: "Pay with Omise",
        });
    };

    const creditCardConfigure = () => {
        if (!OmiseCard) return;
        OmiseCard.configure({
            defaultPaymentMethod: "credit_card",
            otherPaymentMethods: [],
        });
        OmiseCard.configureButton("#credit-card");
        OmiseCard.attach();
    };

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if(amount < 0 && isPackage === ""){
            alert("Empty payment!");
        }else{
            e.preventDefault();
            creditCardConfigure();
            OmiseCard?.open({
                amount: amount, // 100 THB in satangs
                onCreateTokenSuccess: async (token) => {
                setLoading(true);
                try {
                    const response = await fetch("/api/payment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token,
                        amount: amount,
                    }),
                });
                const result = await response.json();
                if (result.success) {
                    alert("Payment Successful!");
                } else {
                    alert("Payment Failed: " + result.message);
                }
            } catch (error) {
                alert("Payment Error: " + error);
            } finally {
                setLoading(false);
            }
        },
        onFormClosed: () => {
            setLoading(false);
        },
    });}   
};

    const packageSelection = (pk:string, amount:number) => {
        setAmount(amount)
        setPackage(pk)
    }



    return (
    <div>
        <ComponentHeader/>
        <div className="own-form">
        <Script
            src="https://cdn.omise.co/omise.js"
            onLoad={handleLoadScript}
        />
    </div>
    <div className="flex justify-center mt-10">
        <div className="mt-10">Contact page</div>
    </div>
    <div className="flex justify-around mt-10">
        <div className="w-[300px] h-[350px] border-[1px] border-gray-300 rounded-lg">
            <div className="flex justify-center">
                <button
                    className="bg-gray-600 w-[140px] h-[40px] rounded-lg"
                    onClick={()=>{
                        packageSelection("small-package", 1000)
                    }}
                >
                    10 THB
                </button>
            </div>
        </div>
        <div className="w-[300px] h-[350px] border-[1px] border-gray-300 rounded-lg">
            <div className="flex justify-center">
                <button
                    className="bg-gray-600 w-[140px] h-[40px] rounded-lg"
                    onClick={()=>{
                        packageSelection("md-package", 3000)
                    }}
                >
                    30 THB
                </button>
            </div>
        </div>
        <div className="w-[300px] h-[350px] border-[1px] border-gray-300 rounded-lg">
            <div className="flex justify-center">
                <button
                    className="bg-gray-600 w-[140px] h-[40px] rounded-lg"
                    onClick={()=>{
                        packageSelection("hg-package", 4000)
                    }}
                >
                    40 THB
                </button>
            </div>
        </div>
        </div>
        <div>
            <div className="text-center mt-[100px] font-bold">
                {
                    isPackage?<h1>Package selection {isPackage}</h1>:""
                }
                {
                    amount?<h1>{amount/100} THB</h1> :""
                }
            </div>
        </div>
        <div className="text-center mt-[60px]">
            <form>
                <button
                    id="credit-card"
                    type="button"
                    onClick={handleClick}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "ชำระเงินด้วยบัตรเครดิต"}
                </button>
            </form>
        </div>
    </div>
  );
};

export default ViewContact;
