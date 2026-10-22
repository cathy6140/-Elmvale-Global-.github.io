import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../App";
import { setSeoMeta } from "../seo";

const fragranceSprite = "data:image/webp;base64,UklGRoYnAABXRUJQVlA4IHonAABQGAGdASqAAvAAPzmMu1cvKT+pqxONY/AnCWVuJgZ65J7QrOqePMPaQmVVJypzVXrR9qj2vvTMbN29dDHn8x3gP61HR+y+Ep5EklzoNtFqdv4ToiP/n1B/fBwxpu+MFeXJoJVQpqrEAAqoieArsvqCE7jCXvcPu49aqy+0a7Y7CpN6AT5qnYrQPC4tFWIIMp9Y/3Pfkvcr0R8P8vpru66SjzsLNDA/LTFyWQlL6HMm76rCXJPod+a7lbGeWsaRa0q9V+l2Ro1KkOHUIXmQ58YLycosr4h57YQXsIelV1EhMr4+g+XtxoN6gUAMWylwMDAEHwJ5HWvF4LEPaJ8SFvnrMeJA759dJuaUhrt48Bnwl89oWBXYpLGr65aNmPk0H+7F7hQPCoOrBHTfSYt0HIxspVeTTdHLOAH+KzFmDUe9w9OXXVm1zpxBU/UIRms+LOYjkyR4uSOaMLvhwtY4qFLwq1Zs81DzgIF2tp+smAn4Sy6ZKiPqEQReZcX/fjPwv1G1djVFd64J7XvTwHElQbH8P9VlCgtFQ8SOWkW1ugHFIingOo6PNGNEQbMBBwS8WeUv1gaI9YujmVpCIbvWGRlpKnHh5Szz3zUkEn1pEpJbOacms9Kc87Ew+JWc0kgv7c7La8+OWS3QfonBbfxX8zEi/U5Jr1+Hj5TK+bZ/z5NsEmn0pxC9bp8nXwy/9Sbc1T5OOUF1TswnPRJLGBqERmsHiawql9OHz7xxXqktJA49Ik2wHIWHitfHc0oO7aylPqRPOzky6RN3sr4mQoged0Sqh+sdyTHciGrOX0wYJZ/d81ujv7/gOvXq553xtKM0LJMCC6NOSJ+/JjGBbaz4TPBBbSMb8a4Ft+IhqZGPOehXG6CAqRzyX2fp11DZLNdmYlFIs7ECAEqs57aOBv6TCHZlCP5yAj6Hu6WlXTOxE+/FkrIVXlQoJOh2k2L8jOFPNcglsR+Dq9i/T8swpLb3i5DK/zQdHgEmEGH/tnBHY0YhcjtToEzW9Me5ceTrXynvWnxaQUtLfTr1PPD/gOUSr8+el5+l0hphi6n+R85iGyiY9p8Mucnm1LnsiCqT5P3EHm6tgnJbLnZ+dFDvk5MGcO7Kz/jv0GKQzi4Ja0R9H2gORXGE7gR1cDFwXpGn3RFV6ZbTEkPBIDIq+us6psi8U7wZKLOqv+u7RlrbqlSsG+68I7AIY+T48NMh4aMXYdJgtKVxzWchtxQceXaIS3ftSvkvyFSPDJVBPicYA3tzSgsQzUCcnIlzgt5IcLNsd21+mVfFlRT7PD8Rl3qzUYm8T6XxS31JbGISLlD2wojXK/M3NLuYx+zU3XM310D1JsoRafntOiWikTBPeyLOmOhcOspV6H5cbZjVk3sBqbslwhKNu163mkzGlYmuAy6L6y2ykvlRYalfewYxOoIl5weM+zwD4mofJCNebDzVGlLpYnc4S1fdyaKD885uvIy90v3NDvnS9sYdTg1WuAf/Si7kzlPRdXjg6/wlmOG5Y7p/3Stp7nxCAb35EZhbxr6cKJ+zMDvnmPRQKRViA0DPw1PzIyYjelaBI1Ss01O+dbdVX+5mOe3HQ9QBjnxoeY+GiKk+R/SAmnYA9pcYheqA8OI+Hr0Oq8k1ochlLv+iVw+azrPUe0gIfMkkYI+f4OOHpHSTQqr95VVMKj6EbxBGfmBdiIg7e/hRqTsCJ3Zs2/bK4pZp0OX3YCaTsykiq/vE/TE4FM//8pY62AfXX7ngWITthhySVKAPLon0fAksFlOpxEEw5qRBQ20hBKtThVMaz32YvQUm7yLCxEHtZYmnEdcHqsSQprxyEJ22NNVdRX4m9lpsQbRjp+IjGADl8UCcYmRr/H/wIEtOs7EaJ20PHI82QmLnOQB5KlpnvRbepb1AsvHbTlLOrFFgJVMWENrJja/sWM3fyX2p3OERI5W6G7kzqFvR1l2iKTRbU4t9U+CWsORrecJhB3usnhYJHR8e0EGWolAN7GpmkYoRCjNw9qjddlr/e7RTEh/PMkTneWULstwqZf0CYqLIwbtvrbnXQtu5kRvrp6O3R0vkPBOU+njluQmLUTqK7saxlWwH3WN6gfilfRxRpofz2rsmsj/d8BRK33LUkg+Df+7j4fbk1Id8q56FrPjaYo9YvgxPwPCXKziOGycSrfyI+jJ0K/GHOY3FvTX02xYxyNdg4Vj3jIc1gWbbhrMZOdLBuiS7XpVaOgfjMd1ZkRcr2k4EsCrPFA/W2mPf8FZDB6ma12Jr+ouSjMvJV8gpijzyvkLrspNEbEnBFi2cJmr7lYQiugHtOLiFD0fIri2g2V8xiaNy/WhJH9F2shhmXkJ4j4rHHZankEnXe3ZYEpxVgDrT110C9zLozxZZq3Z7e1JGMlis/qf3fVkJrvt13SPEBakP/hNFn6IAWrcZH8BlI7a6Ypt7mD0Ew1FwPZMh1wkyMzp1cW7wNVenXZGKc0gRdWihrXaJw3rRfdQrVkRDebhUOtfMAa7oDz0huvFneGJKbbLgIgImMAh5oH8/dgy/ywUBPVeCsGhHq+PSIhdt/048W3EgmINguKyGytPcYqPHZ3br66fjar14yi1sop1ZLA7O1HFz/6NEZzrhU3PDEw4UaPKfbSbuyvteyEH+RKHxbq5CSnfMH5bWLzJe4GVmk/RsEMcBj7CyrBvEvEYEzZeU+pL0ti36pzSHEYi7pcXHqF+D3Mdo7QFa0mMPax8FQyyE01EXjoILLnav9+fkjIra24td+6xNucQeJdmfo8ydcmlaXuRsLNxnz/Z/hk/GtxVSlWCM8OHLD9w/uRewVzc5/ieD85teviAZ62DtFM/649bNw3B6xkmjxZ8d543OZASF18YF46uEySXtRFAFfR5efxl74OwgR7U7wdm6tmnH1vswdDF2KoBWUmgKatIav4KXRYyyGRLyb95laMWfl+qkCvpQ7GtK4KMlL6a885clA5uw84u79oYOZjXOzLoaKMTnbHkMkiYdR7HB+ZJJyvZ6gIyAAP7jo6sJFE6+YZYo+VkHjDbR5JhLWt2IZOjEKX15oGLilZHQI5MX6fFcBvIHVbg4NZ5DRvYtgOCdkOcp9+V48raWXeyf09Bwcql0NmaTamebYoIfdlwkwBX5k1s2L++UqT40lgtf0bf6/BDvJ/rq2bncsT4O4rn0kECpQv/RnYdhzZ2lki8sJ9G6Y0IGm5l1eYzR/KAWlGCr9c996e0kS7UXsNhCBL/wPJegI9jx4GENk9jie6/ApEf1DOLoYYQP1+LZrKz2tC9+27PbpeA5k10MwUotahz5ilR21/xeLBs9lb9R7+crABMm7qimnR+CfB+ZUiFf+5bhD/4nGDG+yAupc2DMkWu0yHRLeZEOzrJ6aGAdBt5IiAp5GpkMB41IyD3nuAiPPOMi4geh1YUsfgB5h3fcyOwtlU7tyZ+JZLByvzv63hpJZjYYor+3D3XNdLLMGWghPHmxcOr2WtlT8i/lZL786+Y86hQEsrKH5g5hnWsmUpifPCxhwyF0VKWEBLgZgsVFMkF/cW66ENNm1b+UIkQZS7K7mU0Rv99mwml2R9slzNXhOXtlIRf49KwzI0T8gyfb/UR+8cjiHpn2yr98DQ79NC8P9eYJ7mrGH0rWpeBmmmAMT0C93R+NQpZeCkdTl2hoTNnss8K1IqNLuwTVasB6OlJ8/wz8OBH8n86dt2ehg/l5CJJzbPGfR+jndCGFO/Qizz8e+znu26rtEcmjImJGoR14zgyh/JldGOJX53fs6daphpLfqIxp7cKFsugS9cF9Ww666jmzunN9j7gM2JUaho6KInvO/30sr2rfMBut8Vs8MJfG8qwbdILTjOxLBafF5N1Z3/UtOOMvscQTJlfPKY6lmXp57D4VN6bjKKEtR+aNJGbPGlIFdPIVTSdR4G3LlomEn0emBQkQirX8jxhYGNZdXraVBnsFiW+rqlIri3DYUoKXYtC8THa0Bz/Kk3YLZvSurIGecR2Fcw35zS+4lyTtMvpQPSG5/HiFbPhuSordmmh4EkzaI9T9doEWj1O006uXldsphRHdfQFhuUIqfkdUIC9+FJ3EnJ1PVlJcK7HMsZvROU7d0Fk282+KGiiT6ThmstQ66TOkc6RTNUQ6/Z3Sn6AhZl1NNdbByEIM0pQZYk3XU7TsPyHlOsaW24bYBvP1wH+0bmHgG9v8vwt9x1qGU9zSdB9xy1Gf3C4GaEu7Jw5U9Xw7K9/56Izkd1H3g1ILHkEZQkSmJddXKUFrBYtCcvbyVgEucdk8GDjqbHdSP4SHhLK5A+WEQih+2sbOfXNRHmck5HDM/cTPw/8F0TjgGDNSAHUbkxZxaArugcSbtu4F+KOvTZdZ+JPmr+yHBeQGt3vt6Fez+hgesGoE5mqXySuXlmADjbTHE2mK89dBCYAEbUuuujFIsoAkdNy3aB1r2Pj4b9YjLdoYb0vtfAJJZMp+d4lQyiJ4JbKL+hsFhWJ32XiTsQcBRJo6Egc1w73iOD0uCUwXl3vjMnXhbiN6YmgIJ8tb+4pmlqLpCHNfRjHCKdSjbeSNhAm1ROpNKgboYgwU67rFO5RjDdPsR02ceh7txRuiKGF3+blPS4O7nbHDEqefISpo3NoNgDL0UItgDYOjtcZ8RPNy6s0kp8LLPWQM5ywkeqMUohGtOtI59xD3TEEvYly29LZMdYjNmsSasAqGJBKJmCcFXogGLUKu1JaENTFHsqWh5XEvkrQ+pb4Zrq+V7jvZfXXofxAKFeX3xkkqthSPjL+iMiR8S8vgfjAfSLQRTS0GnyGt+PHLEvpOxxrAschXdDDGSGvRE5f1Z8MqT7cen3DFHQQxWJARb71PcRU0MgsF08yP9R+nh1FCc4fU6y+WGy+XGER2XuGBULtwI1Oqc6t4q9NfyRHjfF9c9p+Ak9SdIyMpMpOmPcIwkIAwpRGOE7/LGdXJ3scZmBpes44v9Omr1sK8pMSoSRVf1TxNM6YPReLGm8Eo2kLX7IHPWm2D3rnOKRmCI/67FaJ9rX8P3Pqgr0i/bOAsD3IfjELRdACs2jpo57t1CYKK87MlFUo4Be2b2kcMimY5ys6JYCi23FhnqJ2cJ/jtC3cTiSED1VGBbPWgSjPSwZzqCqBs83xUukWiMVqeI3ZCFQKPgIUQ+xZV9Vv0+0iqiWgILChQnDiqnX0m+T4g/yO6OnwLvyZTCJ7KICDKm2tHsPLAtPhhrdSbHYd+49EXPU80HsHW0K86zR0yqTPmmt6hZmtCVPDWFY1s+Q08D9B1oUPwb12TheTOWB2UO+eMM87AZJbukUifCInydwnGtyTC2H2SwpNZYtW+zMVB0IzT8f3wOTAgdsTcmv8HQFiogjLcII8cVjnYZ4pJeSe9NF41OL4a3dvezp4h5qEa3E9cv3Smy4WL4WR6iF/o6UHuue1x6IKocTITT7QpAHDFQuwkPUj8StjyzrhFCZdWauY5M7I5RB7pkSV5Q5HCA65B73R70RAmO15Oh0PXxP+C8sYKas5B+v5+wwNfCZzwvIJpiqzeRKKGwJCnXm/7120VicB60w6yAih+Yd54vO5cGADyCjVCHkwFaDJOlHkk47ILIDvyUbLztqlD1NOt4bOW1+suHlnc1kxLuAujgNE8AbiNUYBCd1QpuFQWIIon3tUzy94wLcaORral6ekskW7TC4N7M4MV8z949JJ9H6p9S+kWPIYl8SoZoX33AscAuKlSdeVm/QbcHobsEQbPTJ9LZyjnfDhQneGGHgdpYga0ZoOffF1iQ4xx95gl/u1p5O/5UG8qQhysheePa1HpRiyFCKRFraCxxvJOuz51CqKEk4V2+mfzc/+moigdbCZR13P2l87TmeJI4fkEE9ag/YdWl8QVr9U6AVFHYDBDUD6J39FpWuH0X4MCyDB+HWe1HthQ0RJn7MFBpWXZIaF5077QiefGOCAfkL/QgRssJyeEwp0WLBO/mBIOKgP+ksPwGfl2mT3hqXP26B+7saa5Rp6wekv4mlQDt05dkFLf0BftcZm8Bo0ZVP0ZwR+44n7RicJTS/ytPhs8aRAtFLYqioHRG++je7vpWuRQ9JDzuYfTqW2i0nh0IuDkWF9GHlOYNSthM/Qu61F+lXTJlss796yGvtaCDfKwSxtb5OWohBV/lyGMQJRzJjCflZsVtMDNYMBdg83aItPskygGeCqBlA8QEFCGjBY41g1yJVqlgTwTcd3ci8mnVV1U6Za1fSY1+IR+2G/FFkmQXQ5pIA+XKdY2QuodDXkplw57/oDigogXhWRQCUtuyPpQ4CjlXjlcHH3Sgivei6Zel+X+JH4j8V3HfFh14QKYzIyDEMN6IfH4KdcZgGSdhyq1Wv4EXUdrf1Lxgct3M8j0QkrD/iEL2uZUj91Yt/UNlkMAPNFzAExWfCKgcOus3wjcZ387x9xEG9+qvewJT7DNoqOiD0Ynm0EIb+C+bCI3cuKJlJ26U9ZyKMoyI3+DH5Mzaz+CYIhUQkcY1yCJ3J1KLIK3pxKslAaJiu8qlsR8T950SldYGnCwP1zs3ZXd4yIl02pW+VatIRut52zLXcKnhVRhktIGJUKuKgu8A2qjobU0RwBJJuauV4tOGQ2UPSrbz7EgYeal7097BAdyGCFCenOsnK1b2n+s2tEgptrLb21ywYJwKECeBB28QofuYWSm74SwYr4QigBGcHys1w2T2fKBGuHcW42f5m2ReC92Myl0oRH991fGyt7/zOmOzHK3tS6D4nQf51yi5Vl25S6elxyk/rtsv9L6ko8PCV1UzElHfOIs7j+n+O0Z1q4MYn7dbNteQ0pBQq6nI0qCmUmfYL1y3lPDNygaRihTyx8u3HZQKqfmuRYjinqIxxFRV0g33OoE6ozmP88RK//UXrQGu5Bj1Fr7FzYGFHy5jWUuYMr9KOZdFFPjzJv3R+bVRLnd9FMSpPojqOE5X5UJxYN3QrZT1h9xddoTXwnT6UG7oxvq4ADJF9ug10Sk+C0ckilQ0JHHlno7AiKvv739IIOiwUzvHmBmZNtT1v0frZCXatoUen/adcYmBjyHuCRyj2C4vRg1wspkMprBlRkywHThWroYUnztGyKhB40iSwIL9zUQSFNlHnGw67JNSydQR+98smfbwTPY7Jy9dxZQEytsp75sPRIRo7l3QlQSFfL+T5ISgZ8PuWqn8qfXWg6k3YzHr4AHEzIoFayH4602ZMGXb3+EJMApKeYLoiNVb50Lkp9CKAFQwhYT5ab4ZuRmCiRiG/GH+S9ROwGfglq3z2sPdfRYItSrC3ZDbrmNBcH2N8Fm4Vz5b3x7LD6Eh8uyZSk65Qf0g9NjTYYMlyhEgDLiE2KQkBWDmV0Ac4IZ38MZ6zEDqT+40uvjimo4QUQBCzOB945jXdZzMb+uswK8I3xoylLqRQlMZfsuVaeAPZhGuHrgNKC8Fctqb2ty3hLm6fTpaNagZo0UoiESk3tseTLhUSxF0EzqfL13d2sEhDuYsPWCHV1Wr0TT4iwTh6Zy5Mi70+Rl73WJoKxKZyAhESHwYTSJS90JCKggIeszPBCanAB50sAgwMyho6H4tN2n98snT+YCVaOYjIIDK1JcFR5xqSUsb1okhVQAs99fr8HKyVPg4gbwmnwXIGmvDF0L92K8X52/f+O6xMCaFzxAtlTWNDdTeXYvPRdSSNsDZiIYM1JhswaN5Eo8zJWhUC7gUslhydwGOVYcbW9F/OfFqAu2SXPyLOL8nlcIEHjbHu+M7INgJ8+SlX8t5C20whuooIgkGJccx38qxEe122PPoYk1YTyU98F4RtBSGhmm4uS3NJ0qFhrVjrzK/z38ELVhMzl0bIZ7dLvEtYVJonJ/h8n7NlFPVG0lPgEJHstWfdh/5tOtQHI/fbj1WkJO2kMije+Z7GqSsKsH55JfhmiYaRFvHjuDBGi6eQfHsDyKOPXU948MK7+tuaG3BJVRFOfpXiVqaO+O8jBDMUuSC1N31EwM4HU0ialOBJuYo+UrAeSgNwee28tRLrMQZJwYkOsxFa91qsTGzktfVwRM7ztS6l7F9INkyCRMzViKwxOmoowJjx4gGy+tPwRJguzHOBLhp3FsVrZocJZQfsl27tWXYHBUrMM7KbE0dXSgtByrIoPePyssECTcEvsKl0MRr1n5ZWP4UnQFe9wVSpxQA2i/M0BzpxHS4bosWnmO0kOfVns74RFnfvwASSq/jaH4qo5ATw2SQrrFI36azo6LcEs+wNehm5Rsx9xs4RHSXcpBw1FEmHk6ZZtr058YslLwrmXaiRS8lQ8SFfApF40St1Ce9qXqlkFOvCUER0zjCMdIMfeNnwmLoRQflYGuC5eM/ldY8qhJ75/Sqvi+R9Hf/QZ/CceoUz7nFtH4X2TxVSqF7nz84f6BpJYYf2UZ5WMHmgr9e8mZ80sCAnTAt6ta9Z8mXIrm21cXTL7vUv9tKenMq7aSRZrMv3eticJCW3kD+t+HxKFAIGpwBjp2NXMKLQarMV8D0ogXk8Qp15TqnWeZPLfUdMekicWZQXPgzwByuEOkU6eP7XcMa0Z0CCxEiIZYTwzk3kyU5YZcxq+R7LYNQzq9HSJo0W6Cj0OjtOuseCE7NtF/YM2Bhpq3TOaTgQSByDWiCOaRHwSwvYEpw/XTmUWdpq7/+uL2Mg/pclYDWYh/DlwnuexaWJOZkHprfeUT0unuMaihVgvswK5R+x+YPUNoFRI6rACAo3Hx7snnuafwb0KkCtw6EDK2+m21R2taWB/F394Ubh1AJPsGWmXe1BeAOARPbnBPekCQAx5mrcW6BV4QZa8tR/pDoLCjeNqiVAF5Ubof2qLVUE7uLyZL94H3dL4Ip9lI8JhRVpR3KpoWgxgA62/W/TbrvrryAJUZ7CtzHQaB088LjE9xN63+RQAQU+69dnhB45qxaoeiwpq8ccuwOdDWsZUelTV1d7URFWvQproe0tB2oQZ1/h6ccbcMhBBUoOwlg0Cdu52Pm8QPaRU7PPLqLmRUAfiZHzdPm5kPHE5XnT0gvyjg9W61JWvaJsOkC8DKYd8q6tYsAHwRGp5HT8mlqCxD2vWS5gNogqWxkWXOU9gMyZ3h0x0JdorcmohTDNNB6zA7eYzKyTEQnkbcQ4mxaCUCzjVIQm3ZjnEjMerZtRkOsnjEaAVoG8s7N6ul4AqAwkb1X8WkgoREnjgDKMbCh9WscE+Sw1GrU53pi9mtgh791fc1CCV/z7QTlYvTM/fxP37dO2SEQR/XhxpeQ/ma4qdIwAZ6kIQmACLQOLnyj2mkLb+z9TAvGqENBvXEKBs4wNKvYgDJsX9UyDhuLUmUO85kmsxy7DD17pM8RxAQEbS5c3SdCfemN05wdnTRhnx1YBtRa5Fggm4eN6FXBSFBG1IPe3CNHgF3uQzFOp+AaqW/qljVyqBh7dLOre09ymkqXHOcXtsclhMAJIaXmmgFZnoqvxCKn1BjBXp15bRux35xzzPJNesQ6fRFzQ6svl6hNqeS+/2o/zrVHIYJpKakFmYmot5hPw4x6305TEeZKRBvefCxpmWftMyeLCkM3dv9O0U8X/aH2jCoYyzdxEwdKFNbE44TYMf8mDcHuqxpxVH0zmemZlsCDa/004DJy83jGbc6X7IW5P+GzQQw/g8aWvjYhvkamLwHNp3J42S6fUnxX5j0hKyYCc3A5hteCvOEk0vNTOGukx0nYhVx7XAczMlIcUDjHeJ3mVLfHWjo7ZoypQ+xIy/t8txt1Qbo1a5gh8yX3sM8OScuil6tz22Gh12JCay002ecBcI4DFZGvQKMCdxe1j0LA3chTVzNC8UMnso91Fi3f/aDvJhu1wa3e+IN+HPQp6PeG5wGjt62sICLXRsJQP2hmGYT7TSmwTHls1MRv7Xo+TgkcCf0nykJ1EBBg5n5eUInZOtzLnHq2bUow3v77hm6TaKQefLjYUj7sX5Y/ZJuzISIAkY5G+K5nYEdwGTxLJG9Il45vanNCWw8SoGggT3RTsDUzpc08ynXViI7IcdCwgELYVys4DpZCVmPQmWWwZQw8U75I5OjDzvnpOUeadqPXSPd1J3sCyJfpnVVE0IjLzgdXBh43HKSnnnzK0i1mYQn87KWyGzEBiwCNPVTeSQ+ug8hdH6AgfG9ORhA+XRFF8qyfvRtgeSCp3WaqKZnyU/HbmrZncXGjGpxL12h2lugL6VWERHQnhR9o+UdS/b1goSlObYsDdZvJdeKqotcMbaGUl7+OmbjtYBqsS/l202zRUX0BPZlEmXllc5eDjZi64xkOXckgjDqmFQttIKXMwRMSG/QnObK35lpxVRDOWseLTQbk4tPnPvS8yx1+IL5b0feaSgijjDMux/ENJtG11fdhY+ZjJbCTAgEYULFXh5vKO7S/NOzZnc9LZuSuVgXdWXFBajg1U8EVf8PYQ0muWUnEwSATyHoJVJj7kZ72FrA9Nb3a4o+XWMhVqEbE7NJiBZLTKD7XFmhsZS6YvPFyzVb7RKXVnuqicc+dbZauxPuK+73MAPIVeEiAClC3j6I+Y7jfo6J8bBIISVKzw7+hg0mxVhwpDCOvfVAxtpTVDUnnfNrPS9QamlQEQIZAr/IxQ/Gd0jomR8d8SGGeIves1HLgvDO1rOLdKCohtrfLJN0DGTONvAni/TwO8iZIBFSlXNwXL/GUp1HT0FO7QjMhBJRDMDO9lZn8BdQ7M0ATWYedC3AakZYqdNBhI6wZVHPTlnNdIkZjrh/hoRmeV70kuKIGxkIOPrh+5ZHWh4VHooMhfG9zVG1IohspPbxn1gSVGxcAFbAMZLnj9mcruPdYC9y5q1waX09+n2HT6q0emGKsaCTZR64P5ZKt9squRDTkG+uCLtSte3nQLWKtGiXWPuq057IwDXqFKboI/xDoyj/9WzPpFZyMHMLBC8Tpkxr7p1RS2OO8nMyOfqcAF/E/IGUvQxxlsEXvHppODsUcKXttcPJiuqCLGj3VoPMBBeKXq9hT3t0H/0wwPkRgZNHTsSnPggm4dnaDCmQ2J4XCNpABU/pCJkg1e4Fvr40Xw4uK/L0xD+DkSNHE462Inc93w8bbvMPJ8wLd3sBlHvG8GPos+OkBxA5zDUTEpKPNtTO/yweHQVqxsJ1elHyNs7p/lINxmSbmomQhg6V7Jh72TsxRtDhLjsQHLCUl8InkiNMPx19kkpMIvU0G8T5HXcx1ouIwSNGNK6vAE/SMbtl+h9bq+wz5UIp2jYc8uJr4WHnKxhoTDJI/BA4RHza+Lz1WVZEaqx0voYthiO4HqlmfBqT1KNBTh+RwjAHLtJ/UWyuIfRFQrQk25WKsUZXSDmWWQenp72YWm7OwLrNhSxuUb4a6MRl60oDgAMWLU7S9HTKR57/oas7yt3MryuL+Rq6sXJFoVZoEd1SQm6/Qka21GkQ6HleBolAR0NcoH2EILxd5yPMY2CSO9NdrKYbZWGf3vDCRkcZOCLxcX29FZIu7cHbTFBp1QY/li8o45lmC1h7Vs6VQqa74pEBVf7AVc3AuaLqwrECPuK9v4mQtRdYXsOINgIv2q3tKsRxuKuPB5+SDZ2N2SM4CPGemeFfCI9l9n82YpU9So0pu+tO+7xGcZFCyjw148K3i9VFjivVdHDgxLMRKPzrBCYgQthNb7vKmvawFLFXi8UEhF6NezWX8JwzuaobvH2quMCLk2iU8SY99t26TcKy7Npu+0MKUVp27bnhxIhJTG5H3x5pbeJaP+avMAMiyf6Sgt/Jo5pOlwR9ANTGSDWNA+Yu/gevB/cgP9vSN+Z6vDFFDd9xDVa7auPwv3qUvTAyexoqhndIQylg2aOKmTLZGJTI4adZf7i4bunMXtxq1LftZK2zAYhiWtpNpj1JIs98u5UWRjBAUKl1OLIpzuvKdlw3Cl+nZQmIcyIVBY5PQMECS1Am0GTgaJOZJOgPlHo11Mg66bWHKQ5GFENjBgRv5MFLHElGd685hazXQd4p02mekm6faScjDxs+x5iIdzQEHbVZN5x0QBOIOpmgZsr8ekthwN5aFy9pXcmOR79QdnK/ZX3WsIdcCBRsFqqqf3DH2gHkjL/BWTrNjJjuqv1a9Ho74L3LFjWqsNvfHcDeIyEMlMnucUUlkMHDnvFpofSKME8cHJWwByW2/c9SBZRh2Rs8GY2eAIvN1aO27UQ2j3FunOPQdfGPsfRjOWnmxU3JEYFMK5v+4koHZ2vBRS8V5Ke2tpmE4PCwwJBkNq596sPLpyKUh/RUaZqoP8dWv96nz6LqRRfG8kHKrzzB4P9nCd9rUlth1fJ0hVvEBQwHDZrRs0r2bHIUKOOSwCNTZ2XAdUcvf/cy8EbyhWyL4S70vSpUoxhGXBCYqSSChdF22Mh1uQH+ybYusMPjyCag8YPgdX/K37ZtT8pGTyt+FzxONqyF0sMABVGIOnL+xGyUXCcc3YFKkrQ25Ge17B1GCQ0kVipq41Azj5KhDOL2tYJV+1wUVlKVgWxF+tse9SadRjzn4fP3sQq0kfSYvvfNLgieTIAZkLeNip1lXwXnSTrJo6725dvorNHuWz0NOLzAqKhy7LCB2E4Ex1dg+sOjrgeDQQXf6XXWvuVR/Jsti7D+ZLsf1EOyE4e+JGOPbawjGIcPq0X1zOXmASebqvBNjSoJQm6O28gGYYeXDtdQMHWJvtFi1GyCzG+yVVeWypGaWqwqwawhXiZLqPwr+/s+lWX4G9P7xryeTTS7cXM38lxLu91o7GVmp/HePIUos8aQgu3axGhqZHofsFG80+/6kOtmbZj/Dq1U5TczSwAj69jTZXb+fMCfHa2L6DCfCgSHfRggyrM1orR/TKAMH6pU50oqAwrJC9dtATHYTFkDy3OMzpMyWEOFCFdOjQHyQN8gJ6c53VmJ6LljOfvtiOO2FcEwlAu7k28TfdPRSsLUhFTRyvRmx+lZE5oEsyDkGcxmTGGJ3NwaH9B34CNXFb+N4NjJgMJqo6Gua/+hyPj+bPXK5v48Th4JnFLhsCIP1OSUVrocdFL+didjDMBwd8gH2M8cQMbMyDPbg03YfnRxfybwSm8OjOy320koGR0mg68tkBdFwEL59Xt3eEiZjtbYFlwtk/6b/qgl21m7LdzY+H809+0HIYchXNzyJkTaX+loZdnzbD/KaF5RLAEOGaraeQsgGCZHBl2JF0eYAdi+8k1V8Z367IOTQ9xz6dY8YD0V1vIaVq8HVAq//eSAZYd8gfbAm3gX+Ru0gXuBQIpr2KhT7yNIpaP9AP7GQ7c+cfqV9yPAxZIwpGwTv/pY2h7kHQeZhcABD5VadaEDzhOZ5tkiy5fXk24ilHwY1hxh/KBhhaOhY4gvluoPGuaHThk2n5+eUzg83cnlzstrcddDzHcVojRIJ3l2w9hQdrFI7+yxHfftbodwag3XvHIONNH52fSJdiVHPU8j1GQKsaLTWlfoaC6AlwdvE9U18j6M1khl+My6TOfaEyM8+j9fdFq1z0gMqcklmmXRr1DlNAgQ3u1nZb+vv9Sl5Q0KJY4gOnHAJ+Uizr9o+FCq42UYPMgAAA==";

const cardPositions = [
  "0% 0%",
  "33.333% 0%",
  "66.666% 0%",
  "100% 0%",
  "0% 100%",
  "33.333% 100%",
  "66.666% 100%",
  "100% 100%",
];

const FragrancePackaging: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const fr = language === "fr";

  useEffect(() => {
    setSeoMeta(
      fr ? "Packaging parfum & flacons | Elmvale Global" : "Fragrance & Perfume Packaging Sourcing | Elmvale Global",
      fr
        ? "Sourcing de flacons parfum, pompes, capots, cols, décoration et packaging secondaire auprès de fabricants en Chine."
        : "Source perfume bottles, pumps, caps, collars, decoration and secondary packaging with manufacturers in China."
    );
  }, [fr]);

  const categories = fr
    ? [
        "Flacons en verre",
        "Pompes & systèmes de sertissage",
        "Capots",
        "Cols",
        "Coating & coloration",
        "Sérigraphie & marquage à chaud",
        "Coffrets & étuis",
        "Développement packaging sur mesure",
      ]
    : [
        "Glass bottles",
        "Pumps & crimp systems",
        "Caps",
        "Collars",
        "Coating & coloration",
        "Silk screen & hot stamping",
        "Boxes & cartons",
        "Custom packaging development",
      ];

  return (
    <div className="bg-white">
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-16">
        <p className="uppercase text-xs tracking-[0.3em] text-stone-400 mb-4">
          {fr ? "PACKAGING PARFUM" : "FRAGRANCE PACKAGING"}
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-6">
          {fr ? "Sourcing packaging pour marques de parfum" : "Packaging Sourcing for Fragrance Brands"}
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
          {fr
            ? "Nous recherchons et coordonnons des solutions de packaging parfum auprès de fabricants en Chine, des composants standards aux développements personnalisés."
            : "We source and coordinate fragrance packaging solutions with manufacturers in China, from stock components to customized development."}
        </p>
      </section>

      <section className="bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <article
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-stone-200/70 bg-stone-900 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  role="img"
                  aria-label={item}
                  className="relative aspect-[4/3] bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  style={{
                    backgroundImage: `url(${fragranceSprite})`,
                    backgroundSize: "400% 200%",
                    backgroundPosition: cardPositions[index],                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,22,18,0.16),rgba(24,19,15,0.28),rgba(14,11,9,0.52))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,235,0.16),transparent_45%)]" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <h2 className="max-w-[90%] text-white text-lg md:text-xl font-medium leading-snug tracking-[0.06em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.38)]">
                      {item}
                    </h2>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-7 text-xs text-stone-400 max-w-3xl leading-relaxed">
            {fr
              ? "Les visuels sont illustratifs. Les options finales, matériaux, finitions et structures dépendent du fabricant et du brief du projet."
              : "Visuals are illustrative. Final options, materials, finishes and structures depend on the manufacturer and project brief."}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Personnalisation" : "Customization"}</h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Selon le projet et le fabricant, nous pouvons rechercher des options de coloration verre, coating, sérigraphie, marquage à chaud, composants décoratifs et développements sur mesure."
              : "Depending on the project and manufacturer, we can source options for glass coloration, coating, silk screen, hot stamping, decorative components and custom packaging development."}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-brand-dark mb-4">{fr ? "Informations utiles pour démarrer" : "Useful Information to Start"}</h2>
          <p className="text-stone-600 leading-relaxed">
            {fr
              ? "Volume du flacon, référence visuelle, type de pompe, finition, quantité estimée, marché cible et calendrier de lancement."
              : "Bottle volume, visual reference, pump type, finish, estimated quantity, target market and launch timing."}
          </p>
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-3xl mb-5">{fr ? "Parlez-nous de votre projet parfum" : "Tell Us About Your Fragrance Project"}</h2>
          <Link to="/contact" className="inline-block bg-white text-brand-dark px-7 py-3 rounded-full">
            {fr ? "Envoyer un brief" : "Send Your Brief"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FragrancePackaging;
