import { supabase } from "./supabaseClient.js"


async function insertData(title, content, is_done ) {
    const { data, error } = await supabase.from('notes').insert({
        title: title,
        content: content,
        is_done: is_done
    }).select()

    if (error) {
        console.error('Error inserting note:', error.message)
    } else {
        console.log('Note inserted successfully:', data)
    }
}

const data = [
    {
        title: 'My Fifth Note',
        content: 'This is the content of my fifth note.',
        is_done: true
    },
    {
        title: 'My Sixth Note',
        content: 'This is the content of my sixth note.',
        is_done: false
    },
    {
        title: 'My Seventh Note',
        content: 'This is the content of my seventh note.',
        is_done: true
    },
    {
        title: 'My Eighth Note',
        content: 'This is the content of my eighth note.',
        is_done: false
    }
]

// Insert each note
for(let i = 0; i < data.length; i++) {
    const note = data[i]
    insertData(note.title, note.content, note.is_done)
}