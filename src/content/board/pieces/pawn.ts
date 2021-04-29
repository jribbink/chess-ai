import { ChessBoard } from "../chess-board";
import { Move } from "../move";
import { ChessPiece } from "./chess-piece";

export class Pawn extends ChessPiece {
    value = 1

    constructor(row: number, col: number, isWhite: boolean) {
        super(row, col, isWhite)
    }

    getMoves(board: ChessBoard): Move[] {
        var moves: Move[] = []
        var delta = (this.isWhite)?1:-1

        if(board.pieces[this.row + delta][this.col + 1] == undefined || board.pieces[this.row + delta][this.col + 1]!!.isWhite != this.isWhite) {
            moves.push(new Move(this.row + delta, this.col + 1))
        }
        if(board.pieces[this.row + delta][this.col - 1] == undefined || board.pieces[this.row + delta][this.col - 1]!!.isWhite != this.isWhite) {
            moves.push(new Move(this.row + delta, this.col - 1))
        }

        return moves
    }
}