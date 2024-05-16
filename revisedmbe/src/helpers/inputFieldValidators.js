export const handleCheckInput = (e, fieldType, value) => {

    const regNum = /^[0-9]{0,12}$/;
    const regYears = /^[0-9]{0,4}$/;
    const regEIN = /^\d{0,2}-?\d{0,7}$/;
    const regZip = /^\d{0,4}-?\d{0,5}$/;
    const regPercent = /^[0-9]{0,3}[%]{0,1}$/;
    const regEmail = /^[a-zA-Z0-9+_.-]{2,150}@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    const regText = /^[a-zA-Z0-9]{1,150}$/;

    if (fieldType === "ein") {
        console.error("ERROR regEIN - ", e.target.value, "value -", value, regEIN.test(e.target.value));
        if (regEIN.test(e.target.value))
            return true;
        else
            e.target.value = value;
    }

    if (fieldType === "zip") {
        console.error("ERROR regZip - ", e.target.value, "value -", value, regZip.test(e.target.value));
        if (regZip.test(e.target.value))
            return true;
        else
            e.target.value = value;
    }

    if (fieldType === "number") {
        console.error("ERROR regNum - ", e.target.value, value, regNum.test(e.target.value));
        if (regNum.test(e.target.value))
            return true;
        else
            e.target.value = value;
    }

    if (fieldType === "years") {
        console.error("ERROR regYears - ", e.target.value, value, regYears.test(e.target.value));
        if (regYears.test(e.target.value))
            return true;
        else
            e.target.value = value;
    }

    if (fieldType === "percent") {
        console.error("ERROR regPercent - ", e.target.value, regPercent.test(e.target.value));
        if (regPercent.test(e.target.value)) {
            return true;
        } else {
            e.target.value = value;
        }
    }

    if (fieldType === "email") {
        console.error("ERROR regEmail - ", e.target.value, regEmail.test(e.target.value));
        if (regEmail.test(e.target.value)) {
            value = e.target.value;
            return true;
        } else {
            value = e.target.value;
        }
    }

    if (fieldType === "text") {
        console.error("ERROR regText - ", e.target.value, regText.test(e.target.value));
        if (regText.test(e.target.value)) {
            value = e.target.value;
            return true;
        } else {
            value = e.target.value;
        }
    }

};