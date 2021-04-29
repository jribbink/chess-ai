import { ChessBoard } from "../chess-board";
import { Move } from "../move";
import { ChessPiece } from "./chess-piece";

export class Knight extends ChessPiece {
    value = 3.05

    constructor(row: number, col: number, isWhite: boolean) {
        super(row, col, isWhite)
    }

    getMoves(board: ChessBoard): Move[] {
        var moves: Move[] = []

        var m = [
            [1, 2],
            [2, 1],
            [1, -2],
            [-1, 2],
            [-1, -2],
            [2, -1],
            [-2, 1],
            [-2, -1]
        ]

        m.forEach(arr => {
            if(board.pieces[this.row + arr[0]][this.col + arr[1]] == undefined || board.pieces[this.row + arr[0]][this.col + arr[1]]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row + arr[0], this.col + arr[1]))
            }
        });

        return moves
    }
}