import { supabase } from "./supabaseClient.js"

//! CREATE 

// async function insertData(title, content, is_done ) {
//     const { data, error } = await supabase.from('notes').insert({
//         title: title,
//         content: content,
//         is_done: is_done
//     }).select()

//     if (error) {
//         console.error('Error inserting note:', error.message)
//     } else {
//         console.log('Note inserted successfully:', data)
//     }
// }

// insertData('Learn Supabase', 'This is the first class of Supabase!', true)


// const data = [
//     {
//         title: 'My Fifth Note',
//         content: 'This is the content of my fifth note.',
//         is_done: true
//     },
//     {
//         title: 'My Sixth Note',
//         content: 'This is the content of my sixth note.',
//         is_done: false
//     },
//     {
//         title: 'My Seventh Note',
//         content: 'This is the content of my seventh note.',
//         is_done: true
//     },
//     {
//         title: 'My Eighth Note',
//         content: 'This is the content of my eighth note.',
//         is_done: false
//     }
// ]


// async function insertAllNotes(notes) {
//     const { data, error } = await supabase.from('notes').insert(notes).select()

//     if (error) {
//         console.error('Error inserting notes:', error.message)
//     } else {
//         console.log('Notes inserted successfully:', data)
//     }
// }

// insertAllNotes(data)



//! READ 

// async function getAllNotes() {
//     const { data, error } = await supabase.from('notes').select('*')

//     if(error) {
//         console.error('Error fetching notes:', error.message)
//     }else {
//         console.log('Notes fetched successfully:', data)
//     }
// }

// getAllNotes()


async function getNoteByid(id) {
    const {data, error} = await supabase.from('notes').select('*').eq('id', id)

    if(error) {
        console.error('Error fetching note:', error.message)
    }else {
        console.log('Note fetched successfully:', data)
    }
}

getNoteByid(12)