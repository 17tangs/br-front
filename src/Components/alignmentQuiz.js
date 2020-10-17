import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import { Zoom } from 'react-reveal';
import GhostContentAPI from '@tryghost/content-api'
import { key, host, url } from '../constants.js';
import './alignmentQuiz.css'
import Question from '../Components/Question';
import QuestionCount from '../Components/QuestionCount';
import AnswerOption from '../Components/AnswerOption';
import quizQuestions from '../Components/quizQuestions';

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    InstapaperShareButton,
    LineShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TumblrShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

const api = new GhostContentAPI({
    url: host,
    key: key,
    version: "v3"
});
const defa = {
    id: "",
    title: "Sorry, this post doesn't exist. :(",
    type: "",
    tags: [],
    category: "",
    date: "",
    author: "",
    html: "",
    text: "",
    image: "",
}

class Post {
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.type = obj.type;
        this.category = obj.category;
        this.date = obj.date;
        this.author = obj.author;
        this.html = obj.html;
        this.tags = obj.tags;
        this.text = obj.text;
        this.image = obj.image;
    }

}
const date = (d) => new Date(d.split('T')[0]).toDateString().substring(4);
export default class AlignmentQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: new Post(defa),
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: {},
            result: ''
        }
    }
    componentDidMount() {
        api.posts.read({ slug: this.props.match.params.articleID, include: 'tags,authors' }, { formats: ['html', 'plaintext'] })
            .then((p) => {
                console.log(p);
                this.setState({
                    post:
                        new Post({
                            id: p.id,
                            title: p.title,
                            type: "regular",
                            category: p.featured ? "feature" : "normal",
                            date: date(p.published_at),
                            author: p.authors[0].name,
                            tags: p.tags.map(u => u.name),
                            html: p.html,
                            text: p.plaintext,
                            image: p.feature_image
                        })
                });
            })
            .catch((err) => {
                console.error(err);
            });
        //Quiz code for answers
        const shuffledAnswerOptions = quizQuestions.map(question =>
            this.shuffleArray(question.answers)
        );
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });

    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };


    render() {
        let { location, match } = this.props;
        console.log(this.state.post);
        let delay1 = Math.floor(Math.random() * 5);
        let delay2 = Math.floor(Math.random() * 5);
        let delay3 = Math.floor(Math.random() * 5);
        // console.log(location);
        let image = null;
        console.log(this.state.post.tags);
        if (this.state.post.image)
            image = <img alt="" style={{ borderRadius: '10px', paddingBottom: '32px' }} src={this.state.post.image} />
        return (
            <div className="flex justify-center">
                <Header />
                <div className="main flex justify-center">
                    <Zoom delay={delay1 * 50}>
                        <div className="App">
                            <div className="App-header">
                                <h2>React Quiz</h2>
                            </div>
                            <Question content="Testing Question: Question?" />
                        </div>
                    </Zoom>
                    <div className="normal">
                        <Zoom delay={delay2 * 50}>
                            <div className="card" id="facts-card">
                                <h4>Quick Facts</h4>
                                <hr />
                                <p id="date">{this.state.post.date}</p>
                                <div id="info">
                                    <p id="author">By {this.state.post.author}</p>
                                </div>
                                <h5>Topics</h5>
                                {this.state.post.tags.map(t =>
                                    <button className="button-article">{t}</button>)}
                            </div>
                        </Zoom>
                        <Zoom delay={delay3 * 50}>
                            <div className="card">
                                <h4>Share</h4>
                                <div style={{ width: '100%' }} className="pv3 flex flex-row justify-between">
                                    <FacebookShareButton children={<FacebookIcon size={32} round={true} />} url={`${url}/article/${this.props.match.params.articleID}`} />
                                    <TwitterShareButton children={<TwitterIcon size={32} round={true} />} url={`${url}/article/${this.props.match.params.articleID}`} />
                                    <LinkedinShareButton children={<LinkedinIcon size={32} round={true} />} url={`${url}/article/${this.props.match.params.articleID}`} />
                                    <EmailShareButton children={<EmailIcon size={32} round={true} />} url={`${url}/article/${this.props.match.params.articleID}`} />
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}




function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    return (
        <div className="quiz">
            <QuestionCount
                counter={props.questionId}
                total={props.questionTotal}
            />
            <Question content={props.question} />
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

