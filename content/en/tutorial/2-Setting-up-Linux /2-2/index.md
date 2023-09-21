---
title: "Making a bootable Linux USB stick"
description: "TestingPageTestingPage."
lead: "Answers to frequently asked questions."
date: 2020-10-06T08:49:31+00:00
lastmod: 2020-10-06T08:49:31+00:00
draft: false
images: []
weight: 220
toc: true
difficulty: "Easy"
time: "two slugs"
inthischapter: "We will make a bootable Linux USB stick"

whatyouneed:
  [
    "An empty USB stick bigger than 4GB ",
    "Access to Windows computer/laptop or Mac",
  ]
---

We learned about Linux. Let’s install Linux on your laptop! To do this, we need to make Linux a ‘bootable’ USB stick.

{{< concept  "<span class=\"fw-bold fs-5\"> Concept: ‘Bootable’?</span>"  "concept">}}

When you turn on your laptop, your laptop finds an **operating system (SECTION LINK)** in your drive and opens that up. That’s how you can see your Windows desktop screen, for example. That’s what you call ‘booting a computer’.

Now your laptop already has Windows installed, it will try to find Windows and boot your laptop with it. We will have to make it open Linux instead, right? But we don’t have Linux installed anywhere yet.

<figure class="">
  <img src="images/placeholder.png" class="lazyloaded blur-up img-fluid ls-is-cached ">
  <figcaption>Image caption</figcaption>
</figure>

In this case, Linux should be made as a ‘bootable’ software. This means that when you turn on your laptop, your laptop automatically reads it as an operating system instead of a program inside your Windows.

{{< /concept >}}

## Use Etcher to make a bootable Linux USB Stick

1. **Install** Etcher you just downloaded

   **File name (for example)** balenaEtcher-Setup-1.18.4.exe

2. Open Etcher and Select ‘Flash from file’. Choose the Linux lite .iso file you just downloaded
   <figure class="">
   <img src="images/Etcher-1.png" class="lazyloaded blur-up img-fluid ls-is-cached ">
   <figcaption>Image caption</figcaption>
   </figure>

3. Inject a USB stick to your laptop and Select it as a target (⚠️SLIPPERY PUDDLE)

   {{< slipperypuddle context="slippery-puddle" >}}

   Your files on your USB drive will be all deleted! Back them up somewhere else if you need them.

   {{< /slipperypuddle >}}
   <figure class="">
   <img src="images/Etcher-2.png" class="lazyloaded blur-up img-fluid ls-is-cached ">
   <figcaption>Image caption</figcaption>
   </figure>

4. **Flash**

    <figure class="">
   <img src="images/Etcher-3.png" class="lazyloaded blur-up img-fluid ls-is-cached ">
   <figcaption>Image caption</figcaption>
   </figure>
   <figure class="">
   <img src="images/Etcher-4.png" class="lazyloaded blur-up img-fluid ls-is-cached ">
   <figcaption>Image caption</figcaption>
   </figure>

# Congratulations!

Now you have a USB bootable stick with Linux Lite on it. With this, you can install Linux Lite on your laptop.
