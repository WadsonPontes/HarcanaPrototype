<?php

if (isset($_POST['entrada'])) {
    // shmop_open(int $key, string $mode, int $permissions, int $size): Shmop | falso
    $shm_id = shmop_open(1, 'c', 0644, 256);

    // shmop_write(Shmop $shmop, string $data, int $offset): int
    shmop_write($shm_id, serialize($_POST['entrada']), 0);
}
else {
    $shm_id = shmop_open(1, 'c', 0644, 256);
    
    shmop_delete($shm_id);
    shmop_close($shm_id);
    
    echo 'Deletado com sucesso!';
}