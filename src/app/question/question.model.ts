export class Question {
    choiceOne: string;
    choiceTwo: string;
    reason: string;
    votes: number;

    constructor(choiceOne: string, choiceTwo: string, reason: string, votes: number) {
        this.choiceOne = choiceOne;
        this.choiceTwo = choiceTwo;
        this.reason = reason;
        this.votes = votes;
    }
}

