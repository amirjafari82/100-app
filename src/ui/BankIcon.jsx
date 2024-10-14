import Saman from "../icons/banks/Saman";
import Ayandeh from "../icons/banks/Ayandeh";
import EghtesadeNovin from "../icons/banks/EghtesadeNovin";
import Gardeshgari from "../icons/banks/Gardeshgari";
import IranZamin from "../icons/banks/IranZamin";
import Keshavarzi from "../icons/banks/Keshavarzi";
import Maskan from "../icons/banks/Maskan";
import Mellat from "../icons/banks/Mellat";
import Melli from "../icons/banks/Melli";
import Parsian from "../icons/banks/Mellat";
import Pasargad from "../icons/banks/Pasargad";
import Saderat from "../icons/banks/Saderat";
import Sepah from "../icons/banks/Sepah";
import Shahr from "../icons/banks/Shahr";
import Sina from "../icons/banks/Saderat";
import Tejarat from "../icons/banks/Saderat";
import styled from "styled-components";
import React from "react";

function BankIcon({ bank, size }) {
    const data = [
        {
            bank: "Saman",
            icon: <Saman size={size} />,
        },
        {
            bank: "Ayandeh",
            icon: <Ayandeh size={size} />,
        },
        {
            bank: "Eghtesade Novin",
            icon: <EghtesadeNovin size={size} />,
        },
        {
            bank: "Gardeshgari",
            icon: <Gardeshgari size={size} />,
        },
        {
            bank: "Iran Zamin",
            icon: <IranZamin size={size} />,
        },
        {
            bank: "Keshavarzi",
            icon: <Keshavarzi size={size} />,
        },
        {
            bank: "Maskan",
            icon: <Maskan size={size} />,
        },
        {
            bank: "Mellat",
            icon: <Mellat size={size} />,
        },
        {
            bank: "Melli",
            icon: <Melli size={size} />,
        },
        {
            bank: "Parsian",
            icon: <Parsian size={size} />,
        },
        {
            bank: "Pasargad",
            icon: <Pasargad size={size} />,
        },
        {
            bank: "Saderat",
            icon: <Saderat size={size} />,
        },
        {
            bank: "Sepah",
            icon: <Sepah size={size} />,
        },
        {
            bank: "Shahr",
            icon: <Shahr size={size} />,
        },
        {
            bank: "Sina",
            icon: <Sina size={size} />,
        },
        {
            bank: "Tejarat",
            icon: <Tejarat size={size} />,
        },
    ];

    return (
        <>
            {data.map((bankItem) => (
                <React.Fragment key={bankItem.bank}>
                    {bankItem.bank === bank ? bankItem.icon : null}
                </React.Fragment>
            ))}
        </>
    );
}

export default BankIcon;
