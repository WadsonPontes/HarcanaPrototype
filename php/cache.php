<?php

function save_cache($data, $name, $timeout) {
    // delete cache
    $id=shmop_open(get_cache_id($name), "a", 0, 0);
    shmop_delete($id);
    shmop_close($id);
   
    // get id for name of cache
    $id=shmop_open(get_cache_id($name), "c", 0644, strlen(serialize($data)));
   
    // return int for data size or boolean false for fail
    if ($id) {
        set_timeout($name, $timeout);
        return shmop_write($id, serialize($data), 0);
    }
    else return false;
}

function get_cache($name) {
    if (!check_timeout($name)) {
        $id=shmop_open(get_cache_id($name), "a", 0, 0);

        if ($id) $data=unserialize(shmop_read($id, 0, shmop_size($id)));
        else return false;          // failed to load data

        if ($data) {                // array retrieved
            shmop_close();
            return $data;
        }
        else return false;          // failed to load data
    }
    else return false;              // data was expired
}

function get_cache_id($name) {
    // maintain list of caches here
    $id=array(  'test1' => 1,
                'test2' => 2
                );

    return $id[$name];
}

function set_timeout($name, $int) {
    $timeout=new DateTime(date('Y-m-d H:i:s'));
    date_add($timeout, date_interval_create_from_date_string("$int seconds"));
    $timeout=date_format($timeout, 'YmdHis');

    $id=shmop_open(100, "a", 0, 0);
    if ($id) $tl=unserialize(shmop_read($id, 0, shmop_size($id)));
    else $tl=array();
    shmop_delete($id);
    shmop_close($id);

    $tl[$name]=$timeout;
    $id=shmop_open(100, "c", 0644, strlen(serialize($tl)));
    shmop_write($id, serialize($tl), 0);
}

function check_timeout($name) {
    $now=new DateTime(date('Y-m-d H:i:s'));
    $now=date_format($now, 'YmdHis');

    $id=shmop_open(100, "a", 0, 0);
    if ($id) $tl=unserialize(shmop_read($id, 0, shmop_size($id)));
    else return true;
    shmop_close($id);

    $timeout=$tl[$name];
    return (intval($now)>intval($timeout));
}
