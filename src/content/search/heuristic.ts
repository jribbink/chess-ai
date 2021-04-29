import { ChessBoard } from "../board";

export class Heuristic {
    static calc(board: ChessBoard, isWhite: boolean) {
        var white: number = 0
        var black: number = 0

        board.pieces.forEach(row => {
            row.forEach(piece => {
                if(piece != undefined) {
                    if(piece.isWhite) {
                        white += piece.value
                    } else {
                        black += piece.value
                    }
                }
            })
        })

        return (isWhite)?(white - black):(black - white)
    }
}