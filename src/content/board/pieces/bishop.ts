import { ChessBoard } from "../chess-board";
import { Move } from "../move";
import { ChessPiece } from "./chess-piece";

export class Bishop extends ChessPiece {
    value = 3.33

    constructor(row: number, col: number, isWhite: boolean) {
        super(row, col, isWhite)
    }

    getMoves(board: ChessBoard): Move[] {
        var moves: Move[] = []

        for(var i = 0; this.row - i >= 0 && this.col - i >= 0; i++) {
            if(board.pieces[this.row - i][this.col - i] == undefined || board.pieces[this.row - i][this.col - i]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row - i, this.col - i))
            } else {
                break;
            }
        }

        for(var i = 0; this.row + i < 8 && this.col - i >= 0; i++) {
            if(board.pieces[this.row + i][this.col - i] == undefined || board.pieces[this.row + i][this.col - i]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row + i, this.col - i))
            } else {
                break;
            }
        }

        for(var i = 0; this.row - i >= 0 && this.col + i >= 0; i++) {
            if(board.pieces[this.row - i][this.col + i] == undefined || board.pieces[this.row - i][this.col + i]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row - i, this.col + i))
            } else {
                break;
            }
        }

        for(var i = 0; this.row + i >= 0 && this.col + i >= 0; i++) {
            if(board.pieces[this.row + i][this.col + i] == undefined || board.pieces[this.row + i][this.col + i]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row + i, this.col + i))
            } else {
                break;
            }
        }

        return moves
    }
}