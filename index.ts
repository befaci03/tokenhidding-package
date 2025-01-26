const mipmap1: Record<string, string> = {
    "a": "Jp", "b": "Gt", "c": "Qo", "d": "Nt", "e": "Mu",
    "f": "Vr", "g": "Az", "h": "Ds", "i": "Lk", "j": "Hb",
    "k": "Qw", "l": "Vv", "m": "Sf", "n": "Zr", "o": "Oa",
    "p": "Lo", "q": "Hd", "r": "Nv", "s": "Ae", "t": "Xw",
    "u": "Mk", "v": "Kb", "w": "Uz", "x": "Oi", "y": "Xx",
    "z": "Cq", "A": "jP", "B": "gT", "C": "qO", "D": "nT",
    "E": "mU", "F": "vR", "G": "aZ", "H": "dS", "I": "lK",
    "J": "hB", "K": "qW", "L": "vV", "M": "sF", "N": "zR",
    "O": "oA", "P": "lO", "Q": "hD", "R": "nV", "S": "aE",
    "T": "xW", "U": "mK", "V": "kB", "W": "uZ", "X": "oI",
    "Y": "xX", "Z": "cQ", "-": "Aë", "_": "AË", "?": "èç",
    "&": "4c", "@": "r3", ",": "MG", ".": "O5", "`": "ëÊ",
    "+": "Ì8", "§": "7U", "#": "ùÔ", "%": "K6", "=": "66",
    "$": "b4", "²": "èà", "^": "dË", "*": "Ûü", "1": "AA",
    "2": "NN", "3": "UU", "4": "ZZ", "5": "FF", "6": "DD",
    "7": "SS", "8": "CC", "9": "HH", "0": "PP"
};

const mipmap1Inverse: Record<string, string> = Object.fromEntries(
    Object.entries(mipmap1).map(([key, value]) => [value, key])
);

class TokenConverter {
    static convertToSecret(token: string, mipmap: number): string {
        if (mipmap === 1) {
            return token
                .split('')
                .map(char => mipmap1[char] || char)
                .join('');
        }
        throw new Error(`Mipmap ${mipmap} doesn't exist.`);
    }

    static convertToToken(secretToken: string, mipmap: number): string {
        if (mipmap === 1) {
            const tokens = secretToken.match(/.{1,2}/g) || [];
            return tokens
                .map(group => mipmap1Inverse[group] || group)
                .join('');
        }
        throw new Error(`Mipmap ${mipmap} doesn't match or doesn't exist.`);
    }
}
