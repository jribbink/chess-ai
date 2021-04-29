import { ChessBoard } from "../chess-board";
import { Move } from "../move";
import { Bishop } from "./bishop";
import { ChessPiece } from "./chess-piece";
import { Rook } from "./rook";

export class Queen extends ChessPiece {
    value = 9.5

    constructor(row: number, col: number, isWhite: boolean) {
        super(row, col, isWhite)
    }

    getMoves(board: ChessBoard): Move[] {
        var moves: Move[] = [
            ...(new Rook(this.row, this.col, this.isWhite)).getMoves(board),
            ...(new Bishop(this.row, this.col, this.isWhite)).getMoves(board)
        ]

        return moves
    }
}