/**
 * This extension calculates the median of an array of numbers.
 */

//% weight=100 color=#0fbc11 icon=""
namespace MathExtensions {
    
    /**
     * Returns the median of a number array.
     * @param bArray The array of numbers to calculate the median for
     */
    //% block="median of array $bArray"
    export function getMedianNum(bArray: number[]): number {
        let  iFilterLen: number = bArray.length;
        let bTemp: number = 0;
        let bTab: number[] = [];

        // Copy elements from bArray to bTab
        for (let i = 0; i < iFilterLen; i++) {
            bTab[i] = bArray[i];
        }

        // Bubble sort to sort bTab
        for (let j = 0; j < iFilterLen - 1; j++) {
            for (let k = 0; k < iFilterLen - j - 1; k++) {
                if (bTab[k] > bTab[k + 1]) {
                    bTemp = bTab[k];
                    bTab[k] = bTab[k + 1];
                    bTab[k + 1] = bTemp;
                }
            }
        }

        // Calculate median
        if (iFilterLen % 2 !== 0) {
            bTemp = bTab[Math.floor(iFilterLen / 2)];
        } else {
            bTemp = (bTab[iFilterLen / 2] + bTab[iFilterLen / 2 - 1]) / 2;
        }

        return bTemp;
    }
}


