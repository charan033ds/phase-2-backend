import { GeneratedContent } from "../GeneratedContent";

export default function GeneratedContentExample() {
  return (
    <div className="p-8 max-w-3xl">
      <GeneratedContent
        repoName="machine-learning-sentiment-analysis"
        readme={`# Machine Learning Sentiment Analysis

A sophisticated machine learning project for analyzing sentiment in text data using natural language processing techniques.

## Features

- Text preprocessing and tokenization
- Sentiment classification using ML models
- Visual analytics dashboard
- Real-time prediction API

## Installation

\`\`\`bash
pip install -r requirements.txt
\`\`\`

## Usage

\`\`\`python
from sentiment_analyzer import SentimentAnalyzer

analyzer = SentimentAnalyzer()
result = analyzer.predict("This is amazing!")
print(result)
\`\`\`

## License

MIT License`}
        linkedinPost={`Excited to share my latest project! 🚀

I've built a machine learning sentiment analysis tool that classifies text emotions with high accuracy. This project combines NLP techniques with modern ML frameworks to deliver real-time sentiment predictions.

Key highlights:
✅ Advanced text preprocessing
✅ Multiple ML model support
✅ Interactive analytics dashboard
✅ REST API for easy integration

Would love to hear your thoughts and feedback!`}
        keywords={[
          "MachineLearning",
          "NLP",
          "SentimentAnalysis",
          "Python",
          "DataScience",
        ]}
      />
    </div>
  );
}
