export class Statistics {
    totalGamesPlayed: number;
    numberOfWins: number;
    numberOfLosses: number;
    winRate: number;
    totalNumberOfGuesses: number;
    averageNumberOfGuesses: number;
    averageNumberOfGuessesInWonGames: number;

    constructor(
        rawData: string
    ) {
        this.totalGamesPlayed = rawData.length
        this.numberOfLosses = this.getNumberOfLosses(rawData)
        this.numberOfWins = this.totalGamesPlayed - this.numberOfLosses
        this.totalNumberOfGuesses = this.getTotalGuesses(rawData)
        this.winRate = Math.round((this.numberOfWins * 100 / this.totalGamesPlayed) * 10) / 10
        this.averageNumberOfGuesses = Math.round((this.totalNumberOfGuesses / this.totalGamesPlayed) * 100) / 100
        this.averageNumberOfGuessesInWonGames = Math.round((this.getTotalGuesses(rawData.replace(/7/g,"")) / this.numberOfWins) * 100) / 100
    }

    getNumberOfLosses(rawData: string) {
        return (rawData.match(/7/g) || [] ).length
    }

    getTotalGuesses(rawData: string) {
        var correctedData = rawData.replace(/7/g, "6")
        var total = 0
        for (const c of correctedData) {
            total += Number(c)
        }
        return total
    }

}