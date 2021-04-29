import { ChessBoard, Move } from "../board";

export class SearchNode {
    board: ChessBoard

    numWin: number = 0
    numVisit: number = 0

    private childArr: (SearchNode[] | undefined) = undefined

    constructor(board: ChessBoard) {
        this.board = board
    }

    get children(): SearchNode[] {
        if(this.childArr == undefined) {
            this.board.pieces.forEach(row => {
                row.forEach(piece => {
                    if(piece != undefined) {
                        var moves: Move[] = piece.getMoves(this.board)
                        moves.forEach(move => {
    
                        })
                    }
                })
            })
        }

        return this.childArr!!
    }
}