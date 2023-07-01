import path from "path";
import fs from 'fs/promises'
import { NextResponse } from "next/server";

// Get CV
export async function GET() {
    // // const pdfPath = path.resolve('./public/cv.pdf'); // Replace 'my-pdf-file.pdf' with the path to your PDF file
    // // const file = fs.createReadStream(pdfPath);
    // // const blob = await fs.readFile(pdfPath)
    // const respone = await fetch('https://drive.google.com/u/0/uc?id=14jvyq0MXB66YowtiRt9TnqgLg9Rfq9Vn&export=download', { cache: "no-store" })
    // const data = await respone.blob()
    // const text = await data.text()
    // // const text = blob.toString("utf-8")
    // // const text2 = 'dasdasda'
    // return new Response(text, {
    //     headers: {
    //         ...respone.headers,
    //         "content-disposition": `attachment; filename="cv.pdf"`,
    //         "content-type": "application/pdf",
    //     }
    // })
    // // return NextResponse.json({ message: r })

    // filename for the file that the user is trying to download
    // const filename = params.filename;

    // external file URL
    const PDF_URL =
        "https://drive.google.com/u/0/uc?id=14jvyq0MXB66YowtiRt9TnqgLg9Rfq9Vn&export=download";

    const response = await fetch(PDF_URL);

    return new Response(response.body, {
        headers: {
            ...response.headers, // copy the previous headers
            "content-disposition": `attachment; filename="${'cv.pdf'}"`,
        },
    });
}
