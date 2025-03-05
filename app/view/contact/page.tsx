"use client"

import ComponentHeader from "../../component/ComponentHeader";
import Image from "next/image";
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
            publicKey: "pkey_test_5x6z2poriuh0aisxnp2",
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
            otherPaymentMethods: ["promptpay", "mobile_banking_bbl"],
        });
        OmiseCard.configureButton("#credit-card");
        OmiseCard.attach();
    };

    const haddlePromptpay = () => {
        if (!OmiseCard) return;
        OmiseCard.configure({
            defaultPaymentMethod: "promptpay",
            otherPaymentMethods: ["credit_card", "mobile_banking_bbl"],
        });
        OmiseCard.configureButton("#promptpay");
        OmiseCard.attach();
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>,paymentType: string) => {
        if (paymentType === "creditCard"){
            if(amount <= 0){
                alert("Empty payment!");
                return;
            }else{
                e.preventDefault();
                creditCardConfigure();
                OmiseCard?.open({
                    amount: amount, // 100 THB in satangs
                    onCreateTokenSuccess: async (token) => {
                    setLoading(true);
                    try {
                        console.log("token:", token)
                        const response = await fetch("http://localhost:9932/api/payment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                token,
                                amount: amount,
                            }),
                        });
                        console.log("response => ",response)
                        const result = await response.json();
                        if (result.message === "success") {
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
                });
            }  
        }else{
            if(amount <= 0){
                alert("Empty payment!");
                return;
            }else{
                e.preventDefault();
                haddlePromptpay();
                OmiseCard?.open({
                    amount: amount, // 100 THB in satangs
                    onCreateTokenSuccess: async (token) => {
                    setLoading(true);
                    try {
                        const response = await fetch("http://localhost:9932/api/payment", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                token,
                                amount: amount,
                                method: "qrcode"
                            }),
                        });
                        console.log("response => ",response)
                        const result = await response.json();
                        if (result.message === "success") {
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
                });
            }
        }
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
            <div>
                <Image
                    className="w-[100%] h-[250px] rounded-t-lg object-cover"
                    src={"/payment/c_s.png"}
                    width={1000}
                    height={100}
                    alt={"aa"}
                />
            </div>
            <div className="flex justify-center mt-10">
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
            <div>
                <Image
                    className="w-[100%] h-[250px] rounded-t-lg object-cover"
                    src={"/payment/c_m.png"}
                    width={1000}
                    height={100}
                    alt={"aa"}
                />
            </div>
            
            <div className="flex justify-center mt-10">
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
        <div>
                <Image
                    className="w-[100%] h-[250px] rounded-t-lg object-cover"
                    src={"/payment/c_h.png"}
                    width={1000}
                    height={100}
                    alt={"aa"}
                />
            </div>
            <div className="flex justify-center mt-10">
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
        {
            amount <= 0? 
                <div className="flex justify-around" >
                    <div className="text-center mt-[60px]">
                        <form>
                            <button
                                className="bg-gray-500  p-2 w-[200px] font-bold rounded-xl"
                                id="credit-card"
                                type="button"
                                onClick={(e) => handleClick(e,"creditCard")}
                                disabled={true}
                            >
                                {loading ? "Processing..." : "ชำระเงินด้วยบัตรเครดิต"}
                            </button>
                        </form>
                    </div>
                    <div className="text-center mt-[60px]">
                        <form>
                            <button
                                className="bg-gray-500  p-2 w-[200px] font-bold rounded-xl"
                                id="promptpay"
                                type="button"
                                onClick={(e) => handleClick(e,"promptpay")}
                                disabled={true}
                            >
                                {loading ? "Processing..." : "promptpay"}
                            </button>
                        </form>
                    </div>
                </div>
            :
            <div className="flex justify-around">
                    <div className="text-center mt-[60px]">
                        <form>
                            <button
                                className="bg-blue-700  p-2 w-[200px] font-bold rounded-xl"
                                id="credit-card"
                                type="button"
                                onClick={(e) => handleClick(e,"creditCard")}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "ชำระเงินด้วยบัตรเครดิต"}
                            </button>
                        </form>
                    </div>
                    <div className="text-center mt-[60px]">
                        <form>
                            <button
                                className="bg-blue-700  p-2 w-[200px] font-bold rounded-xl"
                                id="promptpay"
                                type="button"
                                onClick={(e) => handleClick(e,"promptpay")}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "promptpay"}
                            </button>
                        </form>
                    </div>
                </div>
        }
        
    </div>
  );
};

export default ViewContact;
