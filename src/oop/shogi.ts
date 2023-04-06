// 筋（列）
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
// 段（行）
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
// 先手・後手
type Player = 'first' | 'second'
// 駒の位置を表すクラス。クラスとして定義したものはそのまま型定義としても使用できる
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  // パラメータに渡された位置と現在の位置を差を算出するメソッド
  distanceFrom(position: Position, player: Player) {
    if (player === 'first') {
      // 先手
      return {
        suji: Math.abs(position.suji) - this.suji,
        dan: Math.abs(Number(position.dan)) - Number(this.dan),
      }
    } else {
      // 後手
      return {
        suji: Math.abs(position.suji) - this.suji,
        dan: -(Math.abs(Number(position.dan)) - Number(this.dan)), // 段の位置は正負を反転させる
      }
    }
  }
}

// 駒を表すクラス
abstract class Piece {
  // Pieceクラスとサブクラスでのみアクセス可能となる
  protected position: Position

  // 初期設定
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // メソッドの定義

  /**
   * 駒の移動用メソッド
   * @param position
   */
  moveTo(position: Position) {
    this.position = position
  }

  /**
   * 移動できるかどうかを判定するメソッド
   * 具体的な処理はサブクラスで定義する
   * @param position
   * @param player
   * @returns
   */
  abstract canMoveTo(position: Position, player: Player): boolean
}

/**
 * 王将クラス
 */
class Osho extends Piece {
  // 王将は１マス以内であれば移動可能
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2
  }
}

/**
 * 歩クラス
 */
class Fu extends Piece {
  // 歩は前１マスのみ進行可能
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji === 0 && distance.dan === 1
  }
}

/**
 * 成金クラス
 */
class Narikin extends Fu {
  // 成金は左後方・右後方以外に進行可能
  canMoveTo(position: Position, player: Player): boolean {
    const distance = this.position.distanceFrom(position, player)
    return distance.suji < 2 && distance.dan < 2 && distance.suji !== 0 && distance.dan === -1
  }
}

export default class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      new Osho('first', 5, '1'), //先手
      new Fu('first', 1, '3'),
      new Fu('first', 2, '3'),
      new Fu('first', 3, '3'),
      new Fu('first', 4, '3'),
      new Fu('first', 5, '3'),
      new Fu('first', 6, '3'),
      new Fu('first', 7, '3'),
      new Fu('first', 8, '3'),
      new Fu('first', 9, '3'),
      new Osho('second', 5, '9'), // 後手
      new Fu('second', 1, '4'),
      new Fu('second', 2, '4'),
      new Fu('second', 3, '4'),
      new Fu('second', 4, '4'),
      new Fu('second', 5, '4'),
      new Fu('second', 6, '4'),
      new Fu('second', 7, '4'),
      new Fu('second', 8, '4'),
      new Fu('second', 9, '4'),
    ]
  }
}
