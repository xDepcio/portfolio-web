// Get CV
export async function GET() {
    const PDF_URL =
        "https://drive.google.com/uc?id=10l2NCyV3r06RNfWOq4QTti_-rTDtMFY0&export=download";

    const response = await fetch(PDF_URL);

    return new Response(response.body, {
        headers: {
            ...response.headers,
            "content-disposition": `attachment; filename="${'Aleksander-Drwal-CV-03.07.2023.pdf'}"`,
        },
    });
}
