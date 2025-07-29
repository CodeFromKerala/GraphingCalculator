import math
import numpy as np

def returnVal(func):
    xval = np.linspace(100, -100, 1000)
    yval = []
    for i in xval:
        yval.append(func(i))
    print(yval[1])
    return [xval, yval]

returnVal(np.sin)