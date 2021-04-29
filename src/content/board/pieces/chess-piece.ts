import { ChessBoard } from "../chess-board"
import { Move } from "../move"

export abstract class ChessPiece {
    row: number
    col: number

    isWhite: boolean
    
    abstract value: number
    
    constructor(row: number, col: number, isWhite: boolean) {
        this.row = row
        this.col = col
        this.isWhite = isWhite;
    }

    abstract getMoves(board: ChessBoard): Move[]
}