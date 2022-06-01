import React from 'react';
import CharactersList from '../../components/CharactersList/CharactersList';

function GotList() {
    return(
        <>
            <main className="rounded-md mb-1 p-2">
                <header className="rounded-md bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-slate-800">Game of Thrones - Characters List</h1>
                    </div>
                </header>
            </main>
            <section className="p-2 mb-4">
                <div className="w-full relative bg-white rounded-xl shadow-xl ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18 dark:bg-slate-800 dark:divide-slate-200/5 dark:highlight-white/10 ">
                    <CharactersList />
                </div>
            </section>
        </>
    )
}

export default GotList;
