# xiefu
# 2019-03-26
import os
import time
import pytesseract
from PIL import Image
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# preparation


def isElementExist(element):  # 判断元素是否存在
    flag = True
    try:
        browser.find_element_by_id(element)
        return flag
    except:
        flag = False
        return flag


def getcode():  # 识别验证码为text
    browser.save_screenshot('D:\\screenshot\\a.png')  # 截取当前网页，该网页有我们需要的验证码
    code = browser.find_element_by_id("validImg")  # 定位验证码
    location = code.location  # 获取验证码x,y轴坐标
    size = code.size  # 获取验证码的长宽
    rangle = (
        int(location['x']),
        int(location['y']),
        int(location['x'] + size['width']),
        int(location['y'] + size['height'])
    )  # 截取的位置坐标
    i = Image.open("D:\\screenshot\\a.png")  # 打开截图
    frame4 = i.crop(rangle)  # 使用Image的crop函数，从截图中再次截取我们需要的区域
    frame4.save('D:\\screenshot\\frame4.png')  # 将截取到的验证码保存为jpg图片
    code_picture = Image.open('D:\\screenshot\\frame4.png')  # 打开jpg验证码图片
    # 使用image_to_string识别验证码
    text = pytesseract.image_to_string(code_picture).strip()
    os.remove('D:\\screenshot\\a.png')
    os.remove('D:\\screenshot\\frame4.png')
    return text


# mkdir()
if not os.path.exists('D:\\screenshot'):
    os.mkdir('D:\\screenshot')

# start Chrome and login Webportal
browser = webdriver.Chrome()
browser.implicitly_wait(5)
browser.get("http://103.20.114.60/login.html")  # 打开网页
browser.implicitly_wait(3)
browser.find_element_by_class_name("layui-layer-btn0").click()
browser.maximize_window()
browser.implicitly_wait(3)
browser.find_element_by_xpath("//span[text()='系统管理员']").click()
browser.implicitly_wait(3)
browser.find_element_by_id("username").send_keys("admin")
browser.implicitly_wait(3)
browser.find_element_by_id("password").send_keys("Suntek123")

try:
    browser.find_element_by_id('validate').send_keys(getcode())
    browser.implicitly_wait(3)
    browser.find_element_by_id("loginButton").click()  # 点击登录按钮
    browser.implicitly_wait(3)
    browser.find_element_by_id("orgContacts")
    print('登录成功')
except:
    while isElementExist('validate'):
        browser.find_element_by_id("validate").clear()
        browser.find_element_by_id('validate').send_keys(getcode())
        time.sleep(2)
        browser.find_element_by_id("loginButton").click()  # 点击登录按钮
        time.sleep(3)
    else:
        print('login success')

# 企业通讯录id:orgContacts
