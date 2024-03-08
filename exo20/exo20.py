import time

def now():
    return int(time.time() * 1000)

def get_time_exec(callback):
    begin = now()
    print("get_time_exec, begin:", begin)
    callback()
    end = now()
    print("get_time_exec, end:", end)
    return f"{(end - begin) / 1000} s écoulées"

def add(a, b):
    return a + b

def add_arr(arr):
    return sum(arr)

def facto(n):
    if n == 0:
        return 1
    return n * facto(n - 1)

print(get_time_exec(lambda: facto(500)))
