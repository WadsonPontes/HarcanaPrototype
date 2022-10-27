<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$entrada = 'padrao';

// shmop_open(int $key, string $mode, int $permissions, int $size): Shmop | falso
$shm_id = shmop_open(1, 'c', 0644, 256);

while(true) {
    // shmop_read(Shmop $shmop, int $offset, int $size): string
    $cache = unserialize(shmop_read($shm_id, 0, 256));

    if ($cache) {
        if ($cache !== $entrada) {
            $entrada = $cache;
            echo "data: {$entrada}\n\n";
            ob_end_flush();
            flush();
        }
    }
    else {
        if ($entrada !== 'vazio') {
            $entrada = 'vazio';
            echo "data: {$entrada}\n\n";
            ob_end_flush();
            flush();
        }
    }

    sleep(1);
}

?>