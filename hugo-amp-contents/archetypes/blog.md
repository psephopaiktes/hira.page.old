---
id: "{{ .Name }}"
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
update: false
draft: false
tags: [""]
description: ""
images: ["{{ .Name }}/cover.png"]
---
