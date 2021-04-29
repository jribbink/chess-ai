import { SearchNode } from "../search/search-node";
import { Move } from "./move";
import { King } from "./pieces";
import { ChessPiece } from "./pieces/chess-piece";

export class ChessBoard {
    pieces: (ChessPiece | undefined)[][]
    whiteTurn: boolean
    isWhite: boolean

    constructor(pieces: (ChessPiece | undefined)[][], whiteTurn: boolean, isWhite: boolean) {
        this.pieces = pieces
        this.whiteTurn = whiteTurn
        this.isWhite = isWhite
    }

    deepCopy(): ChessBoard {
        var copy: ChessBoard = new ChessBoard(Object.assign([[]], this.pieces), this.whiteTurn, this.isWhite)
        return copy
    }

    getStatus() {
        var check = this.inCheck()
        if(check != 0) {
            var node = new SearchNode(new ChessBoard(this.pieces, this.whiteTurn, this.isWhite))

            var gameOver = true
            node.children.forEach(child => {
                if(child.board.inCheck() == 0.5) {
                    gameOver = false
                }
            })

            return gameOver?check:0.5
        }
        else
        {
            return 0.5
        }
    }

    movePiece(piece: ChessPiece, move: Move) {
        this.pieces.forEach((r, row, pieces) => {
            r.forEach((p, col) => {
                if(p == piece) {
                    p.row = move.row
                    p.col = move.col

                    pieces[row][col] = undefined
                    pieces[p.row][p.col] = p
                }
            })
        })

        this.whiteTurn = !this.whiteTurn
    }

    inCheck(): number {
        var friendlyKing: King;
        var enemyKing: King;

        this.pieces.forEach(row => {
            row.forEach(piece => {
                if(piece != undefined && piece instanceof King) {
                    if(piece.isWhite == this.isWhite)
                        friendlyKing = piece
                    else
                        enemyKing = piece
                }
            })
        })

        var ret: number = 0.5;
        this.pieces.forEach(row => {
            row.forEach(piece => {
                if(piece != undefined) {
                    if(piece.isWhite != this.isWhite) {
                        piece.getMoves(this).forEach(move => {
                            if(move.row == friendlyKing.row && move.col == friendlyKing.col) {
                                ret = 0
                            }
                        })
                    } else if(piece.isWhite == this.isWhite) {
                        piece.getMoves(this).forEach(move => {
                            if(move.row == enemyKing.row && move.col == enemyKing.col) {
                                ret = 1
                            }
                        })
                    }
                }
            })
        })
        
        return ret
    }
}