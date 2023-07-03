// Get CV
export async function GET() {
    const PDF_URL =
        "https://drive.google.com/u/0/uc?id=1oksCSMv4vluXljJjTnugEg0iYKeNAVkL&export=download";

    const response = await fetch(PDF_URL);

    return new Response(response.body, {
        headers: {
            ...response.headers,
            "content-disposition": `attachment; filename="${'Aleksander-Drwal-CV-03.07.2023.pdf'}"`,
        },
    });
}
