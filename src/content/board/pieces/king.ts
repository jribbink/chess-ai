import { ChessBoard } from "../chess-board";
import { Move } from "../move";
import { ChessPiece } from "./chess-piece";

export class King extends ChessPiece {
    value = 0

    constructor(row: number, col: number, isWhite: boolean) {
        super(row, col, isWhite)
    }

    getMoves(board: ChessBoard): Move[] {
        var moves: Move[] = []

        var m = [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]

        m.forEach(arr => {
            if(board.pieces[this.row + arr[0]][this.col + arr[1]] == undefined || board.pieces[this.row + arr[0]][this.col + arr[1]]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row + arr[0], this.col + arr[1]))
            }
        });

        return moves
    }
}