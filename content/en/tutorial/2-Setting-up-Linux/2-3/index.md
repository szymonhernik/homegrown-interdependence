---
title: "Setting up Linux"
description: "TestingPageTestingPage."
lead: "Answers to frequently asked questions."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
weight: 230
toc: true
difficulty: "Easy"
time: "3-5 hrs"
inthischapter: "We will install Linux Lite on your secondhand (Windows) laptop."
relatedreading: [

" [2-1. What is Operating System and why do I need Linux?]({{< relref \"1-1\" >}}) ",
]
whatyouneed: [
  "bootable USB stick",
    "[SB with Linux Lite](#link-linux-lite) {{< tooltip element=\"?\" >}}UEFI mode does the same job as BIOS. But it is designed to overcome many limitations of the old BIOS mode.

   To boot from our USB with Linux Lite, we need to enable UEFI mode. {{< /tooltip >}}",
]

---

{{< slipperypuddle context="slippery-puddle" >}}

We will delete EVERYTHING from your laptop. If you have anything important, back them up somewhere else!!

{{< /slipperypuddle >}}

{{< concept  "<span class=\"fw-bold fs-5\"> Concept: Understanding BIOS</span>"  "concept">}}

**OMG, what is BIOS???**

Before installing Linux Lite, you need to know that we will go into your laptop’s BIOS. This is because we want to boot your computer from the USB stick, instead of your Windows OS.

Don’t worry, we got you.

<img src="images/bios.png" class="lazyloaded blur-up img-fluid ls-is-cached">

{{< standout-definition >}}

BIOS stands for ‘Basic Input/Output System’. It’s like the basic of the basic settings you see on your computer. We need to change some of the settings there.

{{< /standout-definition >}}

{{< /concept >}}

## How to access the BIOS screen

1. **Turn on** the laptop (if it’s already on, **Restart**)
2. **Quickly tab** the hotkey (see below) on your keyboard **_before_** it boots up completely

{{< details "The BIOS Hotkey List 🔥" "detailed">}}

Every laptop manufacturer has different hotkeys to access the BIOS screen.

- **Acer:** F2 or DEL
- **ASUS:** F2 for all PCs, F2 or DEL for motherboards
- **Dell:** F2 or F12
- **HP:** ESC or F10
- **Lenovo:** F2 or Fn + F2
- **Lenovo (Desktops):** F1
- **Lenovo (ThinkPads):** Enter + F1.
- **MSI:** DEL for motherboards and PCs
- **Origin PC:** F2
- **Samsung:** F2
- **Sony:** F1, F2, or F3
- **Toshiba:** F2
  {{< /details >}}

If your laptop is not on this list, search on the internet with keywords for example:

"Dell (your laptop’s manufacturer) bios key"

## Install Linux Lite on your secondhand laptop

{{< alert context="info" >}}
We made these steps very simple for you. For extensive information, you can also check the [official Linux Lite documentation](https://www.linuxliteos.com/manual/install.html).
{{< /alert >}}

1. <span class="lg-font">**Plug** the bootable USB with Linux Lite into your laptop</span>

2. <span class="lg-font">**Turn on** or restart the laptop and quickly **Tap** the hotkey to go into the BIOS mode</span>

3. <span class="lg-font">**Check** the BIOS mode</span>

   It might look like this. ⚠️ But be aware, the settings are different on different machines.
   Don’t be scared! Just check what’s there if you haven’t.

4. <span class="lg-font">**Change** the booting sequence to boot from **a removable device (USB)**</span>

   Normally your laptop will try to start the operating system from a hard drive as default. But we need it to start from our USB stick with Linux Lite that we made in the last chapter so that we can see the Linux Lite installation screen when booting up.
   Although the settings are written differently, you can check **‘Booting sequence’**, **‘Boot’**, **‘Boot options’**, and **‘Boot order’**… and make sure the ‘Removable Devices’ or ‘USB’ is on top of the booting order.
   This means, when you turn on your laptop, it will start booting up from the ‘Removable Devices’ or ‘USB’ first.

5. <span class="lg-font">**Enable** UEFI mode {{< tooltip element="?" >}}UEFI mode does the same job as BIOS. But it is designed to overcome many limitations of the old BIOS mode.

   To boot from our USB with Linux Lite, we need to enable UEFI mode. {{< /tooltip >}} </span>

6. <span class="lg-font">**Save** settings & **Restart**</span>

   {{< alert context="info"  >}}

   #### Troubleshooting

   **If you get an error ‘no boot device found’**

   1. **Press** any key to reboot the machine
   2. **Go** to BIOS again by **Tapping** the BIOS Hotkey
   3. **Go** to the boot options and see if there’s a **‘Secure Boot’** mode
   4. **Disable** ‘Secure Boot’ mode
   5. **Save** settings & **Restart**
      {{< /alert >}}

{{< tutorial-step-fold "7. **Select** ‘Direct install Linux Lite’ and **Enter**" "folded">}}

<img src="images/boot-linux.png" class="lazyloaded blur-up img-fluid ls-is-cached">
(The second option from this image)
Your laptop will reboot.
{{< /tutorial-step-fold >}}

8. <span class="lg-font">**Select** your language, and keyboard, and **Continue**</span>

9. <span class="lg-font">**Select** _‘I don’t want to connect to a Wi-Fi network right now’_ and **Continue**</span>
10. <span class="lg-font">**Deselect** ‘Download updates while installing Linux’ and **Select** ‘install third-party software during the installation’</span>
11. <span class="lg-font">**Select** _'Erase disk and install Linux’_ and **Install Now**</span>

12. <span class="lg-font">**Select** where you are</span>

13. <span class="lg-font">**Type** in the Who are you? Screen</span>

    - **Your name:** Your full name.
    - **Your computer's name:** The name that will be displayed in your network.
    - **Pick a username:** Your username that will be used to log into your computer.
    - **Choose a password:** Your password that you wish to use for your user and administrator password. (Don’t forget this password! And choose the strong (complicated) one. You can also change it later.)
    - **Confirm your password:** enter the above password again.

After this, your laptop will reboot and process the installation.

## OMG! Congratulations!

Now you have Linux on your laptop!!!!

It wasn’t bad, right?
