import { SHA256 } from 'crypto-js';
import merkle from 'merkle';
import { BlockHeader } from './blockHeader';
import hexToBinary from 'hex-to-binary';
import { 
    BLOCK_GENERATION_INTERVAL,
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    GENESIS,
    UNIT
} from '@core/config';