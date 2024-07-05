import axios from "axios"

export async function homePageAction ({request}) {
    const formData = await request.formData();
    const emailContents = Object.fromEntries(formData);
    

    try {
        const response = await axios.post("https://fgbtechnology-api.vercel.app/email", emailContents);

        console.log(response.data);
        alert("Email sent successfully");
        return null;

    } catch (error) {
        console.log(error.message);
        throw new Error("Failed to send email! Try again or call us on 0303940450");
    }

}