const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");
require('dotenv').config()

  // set `<your-key>` and `<your-endpoint>` variables with the values from the Azure portal.
      const key = process.env.AZURE_FORM_RECOGNIZER_KEY;
      const endpoint = process.env.AZURE_FORM_RECOGNIZER_ENDPOINT;
// sample document
    invoiceUrl = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-invoice.pdf"

async function main() {
    const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));

    const poller = await client.beginAnalyzeDocumentFromUrl("prebuilt-invoice", invoiceUrl);

    const {
        pages, 
        tables, 
        styles, 
        keyValuePairs, 
        entities, 
        documents
    } = await poller.pollUntilDone();

    const receipt = documents.fields;

    if (pages.length <= 0) {
        console.log("No pages were extracted from the document.");
    } else {
        console.log("Pages:");
        for (const page of pages) {
            console.log("- Page", page.pageNumber, `(unit: ${page.unit})`);
            console.log(`  ${page.width}x${page.height}, angle: ${page.angle}`);
            console.log(`  ${page.lines.length} lines, ${page.words.length} words`);
        }
    }

    if (tables.length <= 0) {
        console.log("No tables were extracted from the document.");
    } else {
        console.log("Tables:");
        for (const table of tables) {
            console.log(
                `- Extracted table: ${table.columnCount} columns, ${table.rowCount} rows (${table.cells.length} cells)`
            );
            for (const cell of table.cells) {
                console.log(`  - cell (${cell.rowIndex},${cell.columnIndex}) "${cell.content}"`);
            }
        }
    }

    if (keyValuePairs.length <= 0) {
        console.log("No KV Pairs were extracted from the document.");
    } else {
        console.log(`KV Pairs (${keyValuePairs.length}):`);
        for (const keyvalue of keyValuePairs) {
                console.log(
                    `- KV Pair: ${keyvalue.key?.content.replace(":", "")}: ${keyvalue.value?.content.replace(/\n|\r/g, "")} (${keyvalue.confidence})`
                );
        }
    }
}

main().catch((error) => {
    console.error("An error occurred:", error);
    process.exit(1);
});