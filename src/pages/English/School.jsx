

export const schoolData = [
    {
        topic:'', 
        sentences:[
            {from:'স্কুল ফাঁকি দিওনা', to:"don't skip school"},
            {from:"", to:""},
            ]
    },
]
const School = () => {
    return (   
            <div className="topic-border">
                <ChapterFontpage chapterData={schoolData} chapter={"school"}/>
            </div>
    );
};

export default School;