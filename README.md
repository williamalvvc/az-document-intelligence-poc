# Introduction 
Sample Application for PoC using Azure Congnitive Services (Document Intelligence) for extracting data from PDF documents.

# Getting Started

1.	Installation process

    install the required packages using the following command
            
        npm install

2.	Software dependencies

    This PoC uses the following packages: 
    
        @azure/ai-form-recognizer

    Whis is a client library for the Azure Form Recognizer service. It allows you to:

    nalyze text and structured data from your documents. It includes the following main features:

    - Layout - Extract text, table structures, and selection marks, along with their bounding region coordinates, from documents.

    - Document - Analyze entities, key-value pairs, tables, and selection marks from documents using the general prebuilt document model.
    
    - Read - Read information about textual elements, such as page words and lines in addition to text language information.

    - Prebuilt - Analyze data from certain types of common documents (such as receipts, invoices, business cards, or identity documents) using prebuilt models.
    
    - Custom - Build custom models to extract text, field values, selection marks, and table data from documents. Custom models are built with your own data, so they're tailored to your documents.

    - Classifiers - Build custom classifiers to categorize documents into predefined classes.

4.	Service Documentation references

    https://azure.microsoft.com/en-us/products/ai-services [Azure AI Services] 
    https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence/ [Azure AI Services] 

# Build and Test

Simply run the following command to start the application

    npm start
