import { createClient } from '@supabase/supabase-js'
import { readFile, writeFile } from 'node:fs/promises'

// Node-only script for testing Supabase Storage uploads.
// Uses the npm package directly (not supabaseClient.js), because that file
// imports Supabase from a CDN URL, which only works in the browser.

const supabase = createClient(
    'https://oazlbzfnheikrculotot.supabase.co',
    'sb_publishable_bNaKAauKAXmcT2Prd5CZLw_NDPMYNiR'
)

async function uploadFile(filePath) {
    const fileBuffer = await readFile(filePath)

    const { data, error } = await supabase.storage
        .from('batch18')
        .upload('uploads/naeem-ilyas.jpeg', fileBuffer, {
            contentType: 'image/jpeg',
        })


        




    if (error) {
        console.error('Error uploading file:', error.message)
        return
    }
    console.log('File uploaded successfully:', data)
}

// uploadFile('./naeem-ilyas.jpeg')




async function getFileUrl(filePath) {
    const { data, error } = await supabase.storage
        .from('batch18')
        .getPublicUrl(filePath)

    if (error) {
        console.error('Error getting public URL:', error.message)
        return null
    }else{
        console.log('Public URL:', data.publicUrl)
    }


}

// getFileUrl('uploads/naeem-ilyas.jpeg')

async function downloadFile(filepath){

// Upload in the same bucket and path as the downloaded file


    const { data, error } = await supabase.storage
        .from('batch18')
        .download(filepath)

    if(error){
        console.error('Error downloading file:', error.message)
        return null
    }else{
       const downloadedFileBuffer = await data.arrayBuffer()
       
       const downloadedFile = Buffer.from(downloadedFileBuffer)
       await writeFile('downloaded-naeem-ilyas.jpeg', downloadedFile)
       console.log('File downloaded successfully')
    }
}

downloadFile('uploads/naeem-ilyas.jpeg')