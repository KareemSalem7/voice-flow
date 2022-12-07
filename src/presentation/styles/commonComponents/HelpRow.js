import '../styleSheets/css/HelpPage.css'

export function HelpText() {

    return (
        <div>
            {/* Display the paragraph for explaining how prompt suggester develops best first prompts*/}
            <div className="Help-row" data-testid="Help-row-test">
                <p style={{ margin: 0 }}>Analyzing My Chatbot’s Transcripts to Find the Best First Chatbot Message:</p>
                <dot>1. First, please enter your Voiceflow API key and Version ID into the appropriate fields, so we can locate your chatbot. </dot>
                <dot>2. Voiceflow will automatically compile transcripts from it's database and determine best first prompts curated to your situation. </dot>
                <dot style={{ marginBottom: 30 }}>3. Now press the button below entitled “Submit Now! to find out what the best first prompt would be for your chatbot for you and your customer’s needs. </dot>
            </div>

            {/* Display the paragraph for explaining how prompt suggester implements your selected prompt*/}
            <div className="Help-row">
                <p style={{ margin: 0 }}>Adding My Optimized First ChatBot Prompt to My Voiceflow Canvas: </p>
                <dot>1. Tab over options shown on the left side to view and select one of three suggested first prompts </dot>
                <dot>2. Now click the button entitled “Add My Optimized First Block”. </dot>
                <dot>3. Return to your Voiceflow canvas to see your optimized first message and continue to perfect your chatbot from there. </dot>
            </div>
        </div>
    )

}