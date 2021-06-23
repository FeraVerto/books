import React, {useEffect, useState} from 'react'

export type bookType = {
    bookTitle: string,
    author: string
}

export const BookList = () => {

    const [arrBooks, setArrBooks] = useState<Array<bookType>>([]);


    useEffect(() => {
        const resultArray: Array<bookType> = []
        const keys: Array<string> = Object.keys(localStorage);
        for (const key of keys) {
            const book = localStorage.getItem(key)
            if (book !== null) resultArray.push(JSON.parse(book))

        }
        setArrBooks(resultArray)
    }, [])

    return (
        <div>
            {
                arrBooks.map((a: bookType, i: number) => {
                    return (
                        <div key={i}>
                            <div>{a.bookTitle}</div>
                            <div>{a.author}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}