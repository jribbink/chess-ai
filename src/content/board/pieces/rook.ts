import { ChessBoard } from "../chess-board";
import { Move } from "../move";
import { ChessPiece } from "./chess-piece";

export class Rook extends ChessPiece {
    value = 3.33

    constructor(row: number, col: number, isWhite: boolean) {
        super(row, col, isWhite)
    }

    getMoves(board: ChessBoard): Move[] {
        var moves: Move[] = []

        for(var i = this.col - 1; i >= 0; i++) {
            if(board.pieces[this.row][i] == undefined || board.pieces[this.row][i]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row, i))
            } else {
                break;
            }
        }

        for(var i = this.col + 1; i < 8; i++) {
            if(board.pieces[this.row][i] == undefined || board.pieces[this.row][i]!!.isWhite != this.isWhite) {
                moves.push(new Move(this.row, i))
            } else {
                break;
            }
        }

        for(var i = this.row - 1; i >= 0; i++) {
            if(board.pieces[i][this.col] == undefined || board.pieces[i][this.col]!!.isWhite != this.isWhite) {
                moves.push(new Move(i, this.col))
            } else {
                break;
            }
        }

        for(var i = this.row + 1; i < 8; i++) {
            if(board.pieces[i][this.col] == undefined || board.pieces[i][this.col]!!.isWhite != this.isWhite) {
                moves.push(new Move(i, this.col))
            } else {
                break;
            }
        }

        return moves
    }
}