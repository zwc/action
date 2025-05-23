# GitHub Actions Workshop

## Security

- uses: action/checkout@4 <- unsafe
- uses: action/checkout409028fba969f83adcae3f2b5aa1f737fce10df5 <- add the commit-sha

## On
(what are the different options?)

## Cache
Stored for 7 days, 10GB limit per repo

actions/cache (generic cache for any type of content)
restore-keys

* What permissions should I have for just running and deploying?

Is this enough?

```yaml
permissions:
    contents: read
```

* How do I set staging and production and default environments on the repos?
* How do I prevent the concurrency from stopping

## Best Practices
Where do I find the best practices for CI/CD github action pipelines?

